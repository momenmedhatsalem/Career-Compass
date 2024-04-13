document.addEventListener("DOMContentLoaded", function () {
  // Event listener for form submission
  document
    .querySelector(".signupform")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get form inputs
      var username = document.getElementById("username").value.toLowerCase();
      var firstName = document.getElementById("First_name").value.toLowerCase();
      var lastName = document.getElementById("last_name").value.toLowerCase();
      var email = document.getElementById("InputEmail1").value.toLowerCase();
      var password = document.getElementById("InputPassword").value;
      var confirmPassword = document.getElementById("confirmpass").value;

      // Save data to local storage
      localStorage.setItem("username", username);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("confirmPassword", confirmPassword);

      // Optional: Display a message or perform any additional actions
      console.log("Data saved to local storage.");
    });
});
