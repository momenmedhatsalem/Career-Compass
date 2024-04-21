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
        document.getElementById("bemail").value =
          loggedInUser.business_email || "";
        document.getElementById("skills").value = loggedInUser.skills || "";
        document.getElementById("net1").value = loggedInUser.network_1 || "";
        document.getElementById("net2").value = loggedInUser.network_2 || "";
        document.getElementById("bio").value = loggedInUser.bio || "";
  } else {

    // Redirect to the login page or perform any other action as needed
    window.location.href = "login.html";
  }
});
