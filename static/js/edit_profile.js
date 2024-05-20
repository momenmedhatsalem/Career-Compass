function save_changes() {
  // Retrieve the logged-in user from localStorage
  var userList = JSON.parse(localStorage.getItem("userList")) || [];
  var loggedInUser = userList.find((user) => user.loggedin);

  if (loggedInUser) {
    // Get form inputs
    var fullname = getElementValueById("fname");
    var personal_email = getElementValueById("pemail");
    var bio = getElementValueById("bio");
    var company_name = getElementValueById("cname");
    var business_email = getElementValueById("bemail");
    var skills = getElementValueById("skills");
    var network_1 = getElementValueById("net1");
    var network_2 = getElementValueById("net2");
    var address = getElementValueById("address");
    var country = getElementValueById("country");
    var city = getElementValueById("city");
    var zip_code = getElementValueById("zip");
    var States = getElementValueById("state");
    var map_location = getElementValueById("location");

    // Update the user's data with the form inputs
    loggedInUser.username = fullname;
    loggedInUser.email = personal_email;
    loggedInUser.bio = bio;
    loggedInUser.company_name = company_name;
    if (business_email.trim() !== "") {
      loggedInUser.business_email = business_email;
    }
    if (loggedInUser.email.trim() !== "") {
      loggedInUser.email = personal_email;
    }
    loggedInUser.skills = skills;
    loggedInUser.network_1 = network_1;
    loggedInUser.network_2 = network_2;
    loggedInUser.address = address;
    loggedInUser.country = country;
    loggedInUser.city = city;
    loggedInUser.zip_code = zip_code;
    loggedInUser.States = States;
    loggedInUser.map_location = map_location;

    // Save the updated user data back to localStorage
    localStorage.setItem("userList", JSON.stringify(userList));
    window.location.href = "profile.html";
    // Optional: Display a message or perform any additional actions
    console.log("User data updated and saved to local storage.");
  } else {
    console.error("No logged-in user found.");
  }
}

function getElementValueById(id) {
  var element = document.getElementById(id);
  return element ? element.value : "";
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('deleteProfilePhoto').addEventListener('click', function() {
        var deleteUrl = this.getAttribute("data-delete-url");
        var csrfToken = "{{ csrf_token }}";

        var deleteForm = document.createElement("form");
        deleteForm.method = "POST";
        deleteForm.action = deleteUrl;

        var csrfInput = document.createElement("input");
        csrfInput.type = "hidden";
        csrfInput.name = "csrfmiddlewaretoken";
        csrfInput.value = csrfToken;
        deleteForm.appendChild(csrfInput);

        document.body.appendChild(deleteForm);
        deleteForm.submit();
    });
    });

