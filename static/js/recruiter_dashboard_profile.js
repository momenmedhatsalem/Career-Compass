// class Profile {
//   constructor(
//     // photo,
//     recruiterName,
//     email,
//     website,
//     foundedDate,
//     companySize,
//     phoneNumber,
//     category,
//     aboutCompany,
//     socialMedia,
//     address,
//     country,
//     city,
//     zipCode,
//     state
//   ) {
//     this.details = {
//       // photo: photo,
//       recruiterName: recruiterName,
//       email: email,
//       website: website,
//       foundedDate: foundedDate,
//       companySize: companySize,
//       phoneNumber: phoneNumber,
//       category: category,
//       aboutCompany: aboutCompany,
//     };
//     this.socialMedia = socialMedia;
//     this.addressAndLocation = {
//       address: address,
//       country: country,
//       city: city,
//       zipCode: zipCode,
//       state: state,
//     };
//   }
// }

// // Example usage
// let socialMedia = ["Facebook", "Twitter", "LinkedIn"];
// let profile = new Profile(
//   "g",
//   "John Doe",
//   "john@example.com",
//   "example.com",
//   "2020-01-01",
//   "Small",
//   "1234567890",
//   "Technology",
//   "About the company...",
//   socialMedia,
//   "123 Main St",
//   "New York",
//   "10001",
//   "NY"
// );

// console.log(profile);

// document
//   .getElementById("J9_employer_profile_form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission

//     var recruiter_social_media_links = [];

//     let socialMediaInputs = document.getElementsByName("social_media_link");
//     socialMediaInputs.forEach((input) => {
//       recruiter_social_media_links.push(input.value);
//     });

//     var profile_info = new Profile(
//       // document.getElementById("J9_recruiter_profile_photo").value,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_information_name"
//       ).value,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_information_email"
//       ).value,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_information_website"
//       ).value,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_information_founded_date"
//       ).value,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_information_company_size"
//       ).value,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_information_phone_number"
//       ).value,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_information_category"
//       ).value,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_information_about_company"
//       ).value,
//       recruiter_social_media_links,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_address"
//       ).value,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_location_country"
//       ).value,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_location_city"
//       ).value,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_location_zip_code"
//       ).value,
//       document.getElementById(
//         "J9_emp_dash_prof_right_side_body_emp_location_state"
//       ).value
//     );

//     localStorage.setItem(
//       "recruiter_dashboard_profile",
//       JSON.stringify(profile_info)
//     );
//     alert("your profile has been updated successfully 🫱🏻‍🫲🏻");
//   });

// document.addEventListener("DOMContentLoaded", function () {
//   // Retrieve the logged-in user from localStorage
//   var userList = JSON.parse(localStorage.getItem("userList")) || [];
//   var loggedInUser = userList.find((user) => user.loggedin);

//   // localStorage.clear()
//   if (loggedInUser) {
//     document.getElementById("J9_emp_dash_aside_prof_username").innerHTML =
//       loggedInUser.username;
//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_information_name"
//     ).value = loggedInUser.firstName + " " + loggedInUser.lastName;
//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_information_email"
//     ).value = loggedInUser.email;
//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_information_phone_number"
//     ).value = loggedInUser.phone;

//     var userprofile =
//       JSON.parse(localStorage.getItem("recruiter_dashboard_profile")) || [];

//     // document.getElementById("J9_recruiter_viewed_profile_photo").src =
//     //   userprofile.details.photo;

//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_information_website"
//     ).value = userprofile.details.website;

//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_information_founded_date"
//     ).value = userprofile.details.foundedDate;

//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_information_company_size"
//     ).value = userprofile.details.companySize;

//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_information_category"
//     ).value = userprofile.details.category;

//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_information_about_company"
//     ).value = userprofile.details.aboutCompany;

//     if (userprofile.socialMedia.length > 1) {
//       for (let i = 0; i < userprofile.socialMedia.length - 1; i++) {
//         J9_rec_social_media_add_link();
//       }
//     }

//     var recruiter_social_media_links = userprofile.socialMedia;
//     let socialMediaInputs = document.getElementsByName("social_media_link");
//     socialMediaInputs.forEach((input, index) => {
//       if (recruiter_social_media_links[index]) {
//         input.value = recruiter_social_media_links[index];
//       }
//     });
//     /***************************************************************/
//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_address"
//     ).value = userprofile.addressAndLocation.address;

//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_location_country"
//     ).value = userprofile.addressAndLocation.country;

//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_location_city"
//     ).value = userprofile.addressAndLocation.city;

//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_location_zip_code"
//     ).value = userprofile.addressAndLocation.zipCode;

//     document.getElementById(
//       "J9_emp_dash_prof_right_side_body_emp_location_state"
//     ).value = userprofile.addressAndLocation.state;
//   }
// });

// /**********************************************************/

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

  // console.log(last_social_media_link_number);

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
