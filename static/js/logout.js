function logout() {
  // Retrieve the user list from localStorage
  var userList = JSON.parse(localStorage.getItem("userList")) || [];

  // Find the logged-in user(s) and update their loggedin status to false
  userList.forEach((user) => {
    if (user.loggedin) {
      user.loggedin = false;
      console.log("User logged out:", user.username);
    }
  });

  // Save the updated user list back to localStorage
  localStorage.setItem("userList", JSON.stringify(userList));

  // Redirect to the login page
  window.location.href = "login.html";
}


