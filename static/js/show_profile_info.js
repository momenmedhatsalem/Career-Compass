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
    document.getElementById("cname").value = loggedInUser.company_name || "";
        document.getElementById("bemail").value =
          loggedInUser.business_email || "";
        document.getElementById("skills").value = loggedInUser.skills || "";
        document.getElementById("net1").value = loggedInUser.network_1 || "";
        document.getElementById("net2").value = loggedInUser.network_2 || "";
        document.getElementById("bio").value = loggedInUser.bio || "";

        document.getElementById("address").value = loggedInUser.address || "";
        document.getElementById("country").value = loggedInUser.country || "";
        document.getElementById("city").value = loggedInUser.city || "";
        document.getElementById("zip").value = loggedInUser.zip_code || "";
        document.getElementById("state").value = loggedInUser.States || "";
        document.getElementById("location").value = loggedInUser.map_location || "";

  } else {

    // Redirect to the login page or perform any other action as needed
    // window.location.href = "login.html";
  }
});
