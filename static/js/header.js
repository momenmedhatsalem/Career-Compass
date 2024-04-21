var userList = JSON.parse(localStorage.getItem("userList")) || [];
if(! userList.find((user) => user.loggedin ))
{
  document.getElementById("J9_login_signup").style.display = "none";
}
