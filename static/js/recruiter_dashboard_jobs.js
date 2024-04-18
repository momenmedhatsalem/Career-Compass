document.addEventListener("click", function (event) {
  if (
    !event.target.matches(
      ".J9_emp_dash_jobs_right_side_body_emp_jobs_table_body_row_action_button"
    )
  ) {
    var dropdowns = document.querySelectorAll(
      ".J9_emp_dash_jobs_right_side_body_emp_jobs_table_body_row_action_ul"
    );
    dropdowns.forEach(function (dropdown) {
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    });
  } else {
    var dropdownContent = event.target.nextElementSibling;
    if (
      dropdownContent.style.display === "none" ||
      dropdownContent.style.display === ""
    ) {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  }
});
