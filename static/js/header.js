document.addEventListener("DOMContentLoaded", function () {
  var userList = JSON.parse(localStorage.getItem("userList")) || [];

  if (userList.some((user) => user.loggedin && user.type != "recruiter")) {
    document.getElementById("J9_login_signup_container").style.display = "none";
  } else {
    if (userList.some((user) => user.loggedin)) {
      document.getElementById("J9_login_signup").style.display = "none";
      if (user.type != "recruiter") {
        document.getElementById("J9_login_signup_post").style.display = "none";
      }
    }
  }
});
