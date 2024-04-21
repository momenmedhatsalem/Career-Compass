document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the logged-in user from localStorage
  var userList = JSON.parse(localStorage.getItem("userList")) || [];
  var loggedInUser = userList.find((user) => user.loggedin);

  // localStorage.clear()
  if (loggedInUser) {
    document.getElementById("J9_emp_dash_aside_prof_username").innerHTML =
      loggedInUser.username;
    document.getElementById(
      "J9_emp_dash_prof_right_side_body_emp_information_name"
    ).value = loggedInUser.firstName + " " + loggedInUser.lastName;
    document.getElementById(
      "J9_emp_dash_prof_right_side_body_emp_information_email"
    ).value = loggedInUser.email;
    document.getElementById(
      "J9_emp_dash_prof_right_side_body_emp_information_phone_number"
    ).value = loggedInUser.phone;
  }
});

/**********************************************************/

function J9_rec_social_media_add_link() {
  /*     let row = document.createElement("tr");
    row.className = "J9_emp_dash_jobs_right_side_body_emp_jobs_table_body_row";
    let html = `
 */

  let social_media_links = document.getElementsByClassName(
    "J9_emp_dash_prof_right_side_body_emp_social_media_link_number"
  );

  let last_social_media_link =
    social_media_links[social_media_links.length - 1];
  let last_social_media_link_number = Number(
    last_social_media_link.innerHTML.split(" ")[1]
  );

  console.log(last_social_media_link_number);

  let new_social_media_link = document.createElement("div");
  new_social_media_link.className =
    "J9_emp_dash_prof_right_side_body_emp_social_media_link";

  new_social_media_link.innerHTML = `
  <div class="J9_emp_dash_prof_right_side_body_emp_social_media_link">
  <label class= "J9_emp_dash_prof_right_side_body_emp_social_media_link_number" >Network ${
    last_social_media_link_number + 1
  }</label>
  <input name="social_media_link" type="text" value="">
</div>
  `;
  document
    .getElementById("J9_emp_dash_prof_right_side_body_emp_social_media_links")
    .appendChild(new_social_media_link);
}

