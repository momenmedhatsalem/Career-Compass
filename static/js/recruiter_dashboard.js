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
    document
      .getElementById("J9_main_container")
      .setAttribute("J9_add_html", J9_to_path);

    Array.from(
      document.getElementsByClassName("J9_emp_dash_aside_menu_bar_button")
    ).forEach(function (element) {
      element.style.backgroundColor = "transparent";
      element.style.color = "#000";
    });
    
    if (J9_to_path === "recruiter_dashboard_files/recruiter_dashboard_profile.html") {
      document.getElementById("J9_emp_dash_right_side_body_title").innerHTML =
      "Profile";
      document.getElementsByClassName(
        "J9_emp_dash_aside_menu_bar_button"
      )[0].style = `background-color: #00c853;
      color: #fff;`;
      document.getElementById("page_script").src = "";
    } else if (J9_to_path === "recruiter_dashboard_files/recruiter_dashboard_jobs.html") {
      document.getElementById("J9_emp_dash_right_side_body_title").innerHTML =
      "My Jobs";
      document.getElementsByClassName(
        "J9_emp_dash_aside_menu_bar_button"
      )[1].style = `background-color: #00c853;
      color: #fff;`;
      document.getElementById("page_script").src = "../static/js/recruiter_dashboard_jobs.js";
    } else if (J9_to_path === "recruiter_dashboard_files/recruiter_dashboard_post_job.html") {
      document.getElementById("J9_emp_dash_right_side_body_title").innerHTML =
      "Post a New Job";
      document.getElementsByClassName(
        "J9_emp_dash_aside_menu_bar_button"
      )[2].style = `background-color: #00c853;
      color: #fff;`;
      document.getElementById("page_script").src = "../../static/js/recruiter_dashboard_post_job.js";
    } else if (J9_to_path === "recruiter_dashboard_files/recruiter_dashboard_saved_candidates.html") {
      document.getElementById("J9_emp_dash_right_side_body_title").innerHTML =
      "Saved Candidate";
      document.getElementsByClassName(
        "J9_emp_dash_aside_menu_bar_button"
      )[3].style = `background-color: #00c853;
      color: #fff;`;
      document.getElementById("page_script").src = "";
    } else if (J9_to_path === "recruiter_dashboard_files/recruiter_dashboard_settings.html") {
      document.getElementById("J9_emp_dash_right_side_body_title").innerHTML =
      "Account Settings";
      document.getElementsByClassName(
        "J9_emp_dash_aside_menu_bar_button"
      )[4].style = `background-color: #00c853;
      color: #fff;`;
      document.getElementById("page_script").src = "";
    }
    addHTML();
  }
});


