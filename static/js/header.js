document.addEventListener("DOMContentLoaded", function () {
  var userList = JSON.parse(localStorage.getItem("userList")) || [];
  if (userList.some((user) => user.loggedin)) {
    document.getElementById("J9_login_signup").style.display = "none";
  }
});
