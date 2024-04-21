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
  } else {

    // Redirect to the login page or perform any other action as needed
    window.location.href = "login.html";
  }
});
