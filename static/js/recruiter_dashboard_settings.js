// document.addEventListener("DOMContentLoaded", function () {
//   // Retrieve the logged-in user from localStorage
//   var userList = JSON.parse(localStorage.getItem("userList")) || [];
//   var loggedInUser = userList.find((user) => user.loggedin);

//   // localStorage.clear()
//   if (loggedInUser) {
//     document.getElementById(
//       "J9_emp_dash_settings_right_side_body_container_name_first"
//     ).value = loggedInUser.firstName;
//     document.getElementById(
//       "J9_emp_dash_settings_right_side_body_container_name_last"
//     ).value = loggedInUser.lastName;
//     document.getElementById(
//       "J9_emp_dash_settings_right_side_body_container_email"
//     ).value = loggedInUser.email;
//     document.getElementById(
//       "J9_emp_dash_settings_right_side_body_container_phone_num"
//     ).value = loggedInUser.phone;
//   }
// });

// document
//   .getElementById("J9_recruiter_dashboard_settings_form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission
//     var userList = JSON.parse(localStorage.getItem("userList")) || [];
//     var loggedInUser = userList.find((user) => user.loggedin);
//     if (loggedInUser) {
//       if (
//         document.getElementById(
//           "J9_emp_dash_settings_right_side_body_container_password"
//         ).value === loggedInUser.password
//       ) {
//         loggedInUser.firstName = document.getElementById(
//           "J9_emp_dash_settings_right_side_body_container_name_first"
//         ).value;
//         loggedInUser.lastName = document.getElementById(
//           "J9_emp_dash_settings_right_side_body_container_name_last"
//         ).value;
//         loggedInUser.email = document.getElementById(
//           "J9_emp_dash_settings_right_side_body_container_email"
//         ).value;
//         loggedInUser.phone = document.getElementById(
//           "J9_emp_dash_settings_right_side_body_container_phone_num"
//         ).value;

//             localStorage.setItem("userList", JSON.stringify(userList));

//         alert("your settings have been updated!");
//       } else {
//         alert("your password is incorrect, please try again");
//       }
//     }
//   });

/* 
localStorage.setItem(
  "recruiter_dashboard_profile",
      JSON.stringify(profile_info)
    );

*/
