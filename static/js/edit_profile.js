function save_changes() {
  // Retrieve the logged-in user from localStorage
  var userList = JSON.parse(localStorage.getItem("userList")) || [];
  var loggedInUser = userList.find((user) => user.loggedin);

  if (loggedInUser) {
    // Get form inputs
    var fullname = document.getElementById("fname").value;
    var personal_email = document.getElementById("pemail").value;
    var bio = document.getElementById("bio").value;
    var company_name = document.getElementById("cname").value;
    var business_email = document.getElementById("bemail").value;
    var skills = document.getElementById("skills").value;
    var network_1 = document.getElementById("net1").value;
    var network_2 = document.getElementById("net2").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var zip_code = document.getElementById("zip").value;
    var States = document.getElementById("state").value;
    var map_location = document.getElementById("location").value;

    // Update the user's data with the form inputs
    loggedInUser.username = fullname;
    loggedInUser.email = personal_email;
    loggedInUser.bio = bio;
    loggedInUser.company_name = company_name;
    loggedInUser.business_email = business_email;
    loggedInUser.skills = skills;
    loggedInUser.network_1 = network_1;
    loggedInUser.network_2 = network_2;
    loggedInUser.address = address;
    loggedInUser.country = country;
    loggedInUser.city = city;
    loggedInUser.zip_code = zip_code;
    loggedInUser.States = States;
    loggedInUser.map_location = map_location;

    // Save the updated user data back to localStorage
    localStorage.setItem("userList", JSON.stringify(userList));
    window.location.href = "profile.html";
    // Optional: Display a message or perform any additional actions
    console.log("User data updated and saved to local storage.");
  } else {
    console.error("No logged-in user found.");
  }
}
