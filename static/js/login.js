document.addEventListener("DOMContentLoaded", function () {
  // Event listener for form submission
  document
    .querySelector(".loginform")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get user input
      var emailInput = document
        .getElementById("exampleInputEmail1")
        .value.toLowerCase();
      var passwordInput = document.getElementById(
        "exampleInputPassword1"
      ).value;

      // Retrieve the user list from local storage
      var userList = JSON.parse(localStorage.getItem("userList")) || [];

      // Find the user with matching email and password
      var foundUser = userList.find(
        (user) => user.email === emailInput && user.password === passwordInput
      );

      if (foundUser) {
        // Update the loggedin status of the found user
        foundUser.loggedin = true;

        // Save the updated user list back to localStorage
        localStorage.setItem("userList", JSON.stringify(userList));

        // Redirect to the URL specified in the clicked button's data-link attribute
        if (foundUser.type == "recruiter") {
          window.location.href = "recruiter_dashboard.html";
        }
        else {

          window.location.href = "profile.html";
        }
      } else {
        // No user found with matching email and password, display an alert
        alert("Incorrect email or password. Please try again.");
      }
    });
});
