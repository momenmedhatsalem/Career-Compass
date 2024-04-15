document.addEventListener("DOMContentLoaded", function () {
  // Event listener for form submission
  document
    .querySelector(".signupform")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get form inputs
      var username = document.getElementById("username");
      var firstName = document.getElementById("First_name");
      var lastName = document.getElementById("last_name");
      var email = document.getElementById("InputEmail1");
      var phone = document.getElementById("InputPhone");
      var password = document.getElementById("InputPassword").value;
      var confirmPassword = document.getElementById("confirmpass").value;

      // Check if password and confirm password match
      if (password !== confirmPassword) {
        // Passwords don't match, display an alert
        alert("Passwords do not match. Please try again.");
        return; // Exit the function
      }

      // Save data to local storage
      localStorage.setItem("username", username);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      localStorage.setItem("password", password);

      // Optional: Display a message or perform any additional actions
      console.log("Data saved to local storage.");
    });
});
