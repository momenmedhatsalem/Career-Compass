document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the logged-in user from localStorage
  var userList = JSON.parse(localStorage.getItem("userList")) || [];
  var loggedInUser = userList.find(
    (user) => user.loggedin
  );

  if (loggedInUser) {
    // Prefill profile fields with user data
    document.getElementById("fname").value =
      loggedInUser.username;
    document.getElementById("pemail").value = loggedInUser.email;
    document.getElementById("cname").value = loggedInUser.company_name || "";
        document.getElementById("bemail").value =
          loggedInUser.business_email || "";
        document.getElementById("skills").value = loggedInUser.skills || "";
        document.getElementById("net1").value = loggedInUser.network_1 || "";
        document.getElementById("net2").value = loggedInUser.network_2 || "";
        document.getElementById("bio").value = loggedInUser.bio || "";

        document.getElementById("address").value = loggedInUser.address || "";
        document.getElementById("country").value = loggedInUser.country || "";
        document.getElementById("city").value = loggedInUser.city || "";
        document.getElementById("zip").value = loggedInUser.zip_code || "";
        document.getElementById("state").value = loggedInUser.States || "";
        document.getElementById("location").value = loggedInUser.map_location || "";

  } else {

    // Redirect to the login page or perform any other action as needed
    // window.location.href = "login.html";
  }
});

const uploadCVInput = document.getElementById('j0-uploadCV');
const uploadedResumesContainer = document.getElementById('uploaded-resumes-container');

uploadCVInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];

  // Basic file validation (optional)
  if (!file || !file.type.match(/^(application\/pdf|application\/msword|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document)$/)) {
    alert('Please upload a valid PDF, DOC, or DOCX file.');
    return;
  }

  // Send the file data to the Django backend (using Fetch API)
  const formData = new FormData();
  formData.append('uploadCV', file);

  try {
    const response = await fetch('/upload-resume/', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error uploading resume: ${response.statusText}`);
    }

    // Clear the file input for new selection
    uploadCVInput.value = '';

    // Update the UI with the newly uploaded resume (if successful)
    await updateUploadedResumesList();
  } catch (error) {
    console.error('Error uploading resume:', error);
    alert('There was an error uploading your resume. Please try again.');
  }
});

async function updateUploadedResumesList() {
  const response = await fetch('/get-uploaded-resumes/');

  if (!response.ok) {
    throw new Error(`Error fetching uploaded resumes: ${response.statusText}`);
  }

  const uploadedResumes = await response.json();

  uploadedResumesContainer.innerHTML = ''; 

  uploadedResumes.forEach((resume) => {
    const resumeContainer = document.createElement('div');
    resumeContainer.classList.add('j0-upload');

    const resumeLink = document.createElement('a');
    resumeLink.href = `/download-resume/${resume.id}`; 
    resumeLink.textContent = resume.filename;

    const removeButton = document.createElement('span');
    removeButton.classList.add('j0-remove-btn');
    removeButton.textContent = 'x';

    removeButton.addEventListener('click', async () => {
      if (confirm('Are you sure you want to delete this resume?')) {
        try {
          const response = await fetch(`/delete-resume/${resume.id}`, {
            method: 'DELETE',
          });

          if (!response.ok) {
            throw new Error(`Error deleting resume: ${response.statusText}`);
          }

          await updateUploadedResumesList();
        } catch (error) {
          console.error('Error deleting resume:', error);
          alert('There was an error deleting your resume. Please try again.');
        }
      }
    });

    resumeContainer.appendChild(resumeLink);
    resumeContainer.appendChild(removeButton);

    uploadedResumesContainer.appendChild(resumeContainer);
  });
}

updateUploadedResumesList();
