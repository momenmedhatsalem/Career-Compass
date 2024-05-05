document.addEventListener("DOMContentLoaded", function () {
  var userList = JSON.parse(localStorage.getItem("userList")) || [];

  // if (userList.some((user) => user.loggedin && user.type != "recruiter")) {
  //   document.getElementById("J9_login_signup_container").style.display = "none";
  // } else {
  //   if (userList.some((user) => user.loggedin)) {
  //     document.getElementById("J9_login_signup").style.display = "none";
  //     if (user.type != "recruiter") {
  //       document.getElementById("J9_login_signup_post").style.display = "none";
  //     }
  //   }
  // }
  var loggedInUser = userList.find((user) => user.loggedin);

  // localStorage.clear()
  if (loggedInUser) {
    document.getElementById("J9_login_signup").style.border = "none";
    document.getElementById("J9_login_signup").style.backgroundColor =
    "#00c853";
    document.getElementById("J9_login_signup").style.color = "#eee";
    
    if (loggedInUser.type == "recruiter") {
      document.getElementById("J9_login_signup").id = "J9_post_job";
      document.getElementById("J9_post_job").innerHTML = "Post a job";
      document.getElementById("J9_post_job").href = "/recruiterDashboard";
    } else {
      document.getElementById("J9_login_signup").id = "J9_look_for_a_job";
      document.getElementById("J9_look_for_a_job").innerHTML = "look for a job";
      document.getElementById("J9_post_job").href = "/jobs";
    }
  }

  // if (
  //   userList.some(function (user) {
  //     user.loggedin && user.type != "recruiter";
  //   })
  // ) {

  // }
});
