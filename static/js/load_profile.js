function loadProfile() {
  // Retrieve the logged-in user from localStorage
  var userList = JSON.parse(localStorage.getItem("userList")) || [];
  var loggedInUser = userList.find((user) => user.loggedin);

  if (loggedInUser) {
    // Determine the profile page URL based on the user's type
    var profilePageUrl;
    if (loggedInUser.type === "employee") {
      profilePageUrl = "/profile";
    } else if (loggedInUser.type === "recruiter") {
      profilePageUrl = "/recruiterDashboard";
    } else {
      // Unknown user type, handle accordingly
      console.error("Unknown user type:", loggedInUser.type);
      return;
    }

    // Redirect to the profile page
    window.location.href = profilePageUrl;
  } else {
    // No logged-in user found, redirect to login page
    console.error("No logged-in user found.");
    window.location.href = "login.html";
  }
}
