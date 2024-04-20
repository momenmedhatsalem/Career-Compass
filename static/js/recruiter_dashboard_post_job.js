// var myForm = document.getElementById("J9_recruiter_add_job_form");
// if (myForm) {
  document
    .getElementById("J9_recruiter_add_job_form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get form values
      // var name = document.getElementById("name").value;
      // var email = document.getElementById("email").value;
      console.log(5);
      var jobDetails = new job_details(
        document.getElementById("J9_recruiter_add_job_job_id").value,
        document.getElementById("J9_recruiter_add_job_job_title").value,
        document.getElementById("J9_recruiter_add_job_company_name").value,
        document.getElementById("J9_recruiter_add_job_job_status").value,
        document.getElementById("J9_recruiter_add_job_years_of_experience")
          .value,
        document.getElementById("J9_recruiter_add_job_job_desc").value,
        document.getElementById("J9_recruiter_add_job_job_category").value,
        document.getElementById("J9_recruiter_add_job_job_type").value,
        document.getElementById("J9_recruiter_add_job_salary").value,
        document.getElementById("J9_recruiter_add_job_min_salary").value,
        document.getElementById("J9_recruiter_add_job_max_salary").value
      );
      var jobEnglishExperience = new job_english_experience(
        document.getElementById("J9_recruiter_add_job_english_fluency").value,
        document.getElementById("J9_recruiter_add_job_experience").value
      );
      var jobAddressLocation = new job_address_and_location(
        document.getElementById("J9_recruiter_add_job_address").value,
        document.getElementById("J9_recruiter_add_job_country").value,
        document.getElementById("J9_recruiter_add_job_city").value,
        document.getElementById("J9_recruiter_add_job_zip_code").value,
        document.getElementById("J9_recruiter_add_job_state").value
      );

      var newJob = new job(
        jobDetails,
        jobEnglishExperience,
        jobAddressLocation
      );

      // Get the existing array of jobs from local storage
      var jobsArray = JSON.parse(localStorage.getItem("my_jobs"));

      // If the array doesn't exist, create it
      if (!Array.isArray(jobsArray)) {
        jobsArray = [];
      }

      // Add the new job to the array
      jobsArray.push(newJob);

      // Store the updated array back into local storage
      localStorage.setItem("my_jobs", JSON.stringify(jobsArray));

      // // Get existing data from local storage or initialize an empty array
      // var dataArray = JSON.parse(localStorage.getItem("formData")) || [];

      // // Insert the object into the array
      // dataArray.push(formData);

      // // Store the array in local storage
      // localStorage.setItem("formData", JSON.stringify(dataArray));

      // Optionally, you can clear the form fields after submission
      document.getElementById("J9_recruiter_add_job_form").reset();

      // Optionally, you can display a confirmation message
      // alert("Form submitted successfully!");
    });
// }

// IDs
/*
J9_recruiter_add_job_form

J9_recruiter_add_job_job_id
J9_recruiter_add_job_job_title
J9_recruiter_add_job_company_name
J9_recruiter_add_job_job_status
J9_recruiter_add_job_years_of_experience
J9_recruiter_add_job_job_desc
J9_recruiter_add_job_job_category
J9_recruiter_add_job_job_type
J9_recruiter_add_job_salary
J9_recruiter_add_job_min_salary
J9_recruiter_add_job_max_salary

J9_recruiter_add_job_english_fluency
J9_recruiter_add_job_experience

J9_recruiter_add_job_address
J9_recruiter_add_job_country
J9_recruiter_add_job_city
J9_recruiter_add_job_zip_code
J9_recruiter_add_job_state
*/

