document.addEventListener("click", function (event) {
  if (
    !event.target.matches(
      ".J9_emp_dash_saved_candidates_right_side_candidate_card_details_actions_button"
    )
  ) {
    var dropdowns = document.querySelectorAll(
      ".J9_emp_dash_saved_candidates_right_side_candidate_card_details_actions_ul"
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
