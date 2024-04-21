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

      // Retrieve email and password from local storage
      var storedEmail = localStorage.getItem("email");
      var storedPassword = localStorage.getItem("password");

      // Check if email and password match
      if (emailInput === storedEmail && passwordInput === storedPassword) {
        // Email and password are correct
        // Redirect to the URL specified in the clicked button's data-link attribute
        var redirectUrl = event.submitter.getAttribute("data-link");
        window.location.href = redirectUrl;
      } else {
        // Email or password is incorrect, display an alert
        alert("Incorrect email or password. Please try again.");
      }
    });
});
