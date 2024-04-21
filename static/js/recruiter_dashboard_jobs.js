var my_jobs = JSON.parse(localStorage.getItem("jobs"));

let my_jobs_table = document.getElementById(
  "J9_emp_dash_jobs_right_side_body_emp_jobs_table_body"
);

if (my_jobs !== null) {
  my_jobs.forEach((element) => {
    let row = document.createElement("tr");
    row.className = "J9_emp_dash_jobs_right_side_body_emp_jobs_table_body_row";
    let html = `
  <td class="J9_emp_dash_jobs_right_side_body_emp_jobs_table_body_row_title">
    <div>${element.details.title}</div>
    <div>${element.details.type} . ${element.address_and_location.country}</div>
    </td>
    <td>${element.details.creation_date}</td>
    <td>${Math.floor(Math.random() * (300 - 10 + 1)) + 10} Applications</td>
    <td>
    <div class="${
      element.details.status === "open" ? "J9_open" : "J9_closed"
    } J9_emp_dash_jobs_right_side_body_emp_jobs_table_body_row_status">
    ${element.details.status}
    </div>
  </td>
  <td>
    <div class="J9_emp_dash_jobs_right_side_body_emp_jobs_table_body_row_action_dots">
      <button class="J9_emp_dash_jobs_right_side_body_emp_jobs_table_body_row_action_button">
        <span></span>
        </button>
        <ul class="J9_emp_dash_jobs_right_side_body_emp_jobs_table_body_row_action_ul">
        <li><a href="#"><img src="../../media/icons/eye.svg">View</a>
        </li>
        <li><a href="#"><img src="../../media/icons/edit.svg">Edit</a>
        </li>
        <li><a href="#" onclick="deleteJob(${
          element.details.id
        })"><img src="../../media/icons/delete.svg">Delete</a></li>
      </ul>
    </div>
  </td>`;
    row.innerHTML = html;

    my_jobs_table.appendChild(row);
  });
}

/*⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻*/

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

/**********************************************************/

function deleteJob(id) {
  const jobs = JSON.parse(localStorage.getItem("jobs"));
  
  console.log(id);
  // Find the index of the job with the matching id
  const indexToDelete = jobs.findIndex((job) => Number(job.details.id) === id);
  
  // If the job with the matching id is found, delete it
  if (indexToDelete !== -1) {
    jobs.splice(indexToDelete, 1); // Remove the job from the array
    localStorage.setItem("jobs", JSON.stringify(jobs)); // Save the modified array back to local storage
    console.log("Job deleted successfully.");
  } else {
    console.log("Job with the specified id not found.");
  }
}

