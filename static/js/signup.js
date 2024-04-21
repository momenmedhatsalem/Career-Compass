// Define the User class
class User {
  constructor(username, firstName, lastName, email, phone, password) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.type = "employee"; // Default type
    this.loggedin = false; // Default loggedin status
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Event listener for form submission
  document
    .querySelector(".signupform")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get form inputs
      var username = document.getElementById("username").value;
      var firstName = document.getElementById("First_name").value;
      var lastName = document.getElementById("last_name").value;
      var email = document.getElementById("InputEmail1").value;
      var phone = document.getElementById("InputPhone").value;
      var password = document.getElementById("InputPassword").value;
      var confirmPassword = document.getElementById("confirmpass").value;

      // Check if password and confirm password match
      if (password !== confirmPassword) {
        // Passwords don't match, display an alert
        alert("Passwords do not match. Please try again.");
        return; // Exit the function
      }

      // Create a new User object
      var newUser = new User(
        username,
        firstName,
        lastName,
        email,
        phone,
        password
      );

      // Set user type based on form ID
      if (event.target.id === "recruiterSignUpForm") {
        newUser.type = "recruiter";
      }

      // Get the list of users from localStorage or initialize an empty array
      var userList = JSON.parse(localStorage.getItem("userList")) || [];

      // Add the new user to the list
      userList.push(newUser);

      // Save the updated user list to localStorage
      localStorage.setItem("userList", JSON.stringify(userList));

      // Optional: Display a message or perform any additional actions
      console.log("New user signed up:", newUser);
      logout();
      // Redirect the user to the login page
      // window.location.href = "login.html";
    });
});

