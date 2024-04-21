// document.addEventListener("click", function (event) {
//   if (event.target.classList.contains("J9_to_path")) {
//     var J9_to_path = event.target.getAttribute("J9_to_path");
//     document
//       .getElementById("J9_main_container")
//       .setAttribute("J9_add_html", J9_to_path);
//     addHTML();
//   }
// });

document.addEventListener("click", function (event) {
  var J9_to_path = event.target.getAttribute("J9_to_path");
  if (J9_to_path !== null) {
    Array.from(
      document.getElementsByClassName("J9_emp_dash_aside_menu_bar_button")
    ).forEach(function (element) {
      element.style.backgroundColor = "transparent";
      element.style.color = "#000";
    });

    if (J9_to_path === "J9_recruiter_dashboard_profile") {
      document.getElementById("J9_emp_dash_right_side_body_title").innerHTML =
        "Profile";
      document.getElementsByClassName(
        "J9_emp_dash_aside_menu_bar_button"
      )[0].style = `background-color: #00c853;
      color: #fff;`;
    } else if (J9_to_path === "J9_recruiter_dashboard_jobs") {
      document.getElementById("J9_emp_dash_right_side_body_title").innerHTML =
        "My Jobs";
      document.getElementsByClassName(
        "J9_emp_dash_aside_menu_bar_button"
      )[1].style = `background-color: #00c853;
      color: #fff;`;
      document
    } else if (J9_to_path === "J9_recruiter_dashboard_post_job") {
      document.getElementById("J9_emp_dash_right_side_body_title").innerHTML =
        "Post a New Job";
      document.getElementsByClassName(
        "J9_emp_dash_aside_menu_bar_button"
      )[2].style = `background-color: #00c853;
      color: #fff;`;
    } else if (J9_to_path === "J9_recruiter_dashboard_saved_candidates") {
      document.getElementById("J9_emp_dash_right_side_body_title").innerHTML =
        "Saved Candidate";
      document.getElementsByClassName(
        "J9_emp_dash_aside_menu_bar_button"
      )[3].style = `background-color: #00c853;
      color: #fff;`;
    } else if (J9_to_path === "J9_recruiter_dashboard_settings") {
      document.getElementById("J9_emp_dash_right_side_body_title").innerHTML =
        "Account Settings";
      document.getElementsByClassName(
        "J9_emp_dash_aside_menu_bar_button"
      )[4].style = `background-color: #00c853;
      color: #fff;`;
    }

    var bodyTitle = document.querySelector(".J9_emp_dash_right_side_body_title");
    if (bodyTitle) {
      var divsToHide =
        bodyTitle.parentElement.querySelectorAll(".J9_emp_dash_right_side_body_title ~ div");
      divsToHide.forEach(function (div) {
        div.style.display = "none";
      });
    }
    document.getElementById(J9_to_path).style.display = "block";

    addHTML();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the user list from local storage
  var userList = JSON.parse(localStorage.getItem("userList")) || [];
  var loggedInUser = userList.find((user) => user.loggedin);

  if (loggedInUser) {
    // Prefill the last name input
    var lastNameInputs = document.querySelectorAll(".j9Name");
    lastNameInputs.forEach(function (lastNameInput) {
      if (lastNameInput) {
        lastNameInput.value = loggedInUser.username || "";
      }
    });

    // Prefill the email input
    var emailInputs = document.querySelectorAll(".j9Email");
    emailInputs.forEach(function (emailInput) {
      if (emailInput) {
        emailInput.value = loggedInUser.email || "";
      }
    });
  } else {
    console.error("No logged-in user found.");
  }
});

