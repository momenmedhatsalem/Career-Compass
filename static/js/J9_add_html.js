// function addHTML() {
//   var el, i, domEl, fileName, xmlHttp;

//   /*Iterate all DOM*/
//   el = document.getElementsByTagName("*");
//   for (i = 0; i < el.length; i++) {
//     domEl = el[i];

//     /*find the element having J9_add_html attribute*/
//     fileName = domEl.getAttribute("J9_add_html");
//     if (fileName) {
//       /*http request with attribute value as file name*/
//       xmlHttp = new XMLHttpRequest();
//       xmlHttp.onreadystatechange = function () {
//         if (this.readyState == 4) {
//           if (this.status == 200) {
//             domEl.innerHTML = this.responseText;
//           }
//           if (this.status == 404) {
//             domEl.innerHTML = "Page not found.";
//           }

//           /* Remove the attribute and invoke the function again*/
//           domEl.removeAttribute("J9_add_html");
//           addHTML();
//         }
//       };
//       xmlHttp.open("GET", fileName, true);
//       xmlHttp.send();

//       /*function ends*/
//       return;
//     }
//   }
// }
// addHTML();

/*⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻*/

// function addHTML() {
//   // Select all elements with the "J9_add_html" attribute
//   var elements = document.querySelectorAll("[J9_add_html]");

//   // Iterate over the selected elements
//   elements.forEach(function(element) {
//     var fileName = element.getAttribute("J9_add_html");

//     // Fetch the content of the file
//     fetch(fileName)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Page not found.");
//         }
//         return response.text();
//       })
//       .then(html => {
//         // Replace the inner HTML of the element with the fetched content
//         element.innerHTML = html;
//         // Remove the "J9_add_html" attribute
//         element.removeAttribute("J9_add_html");
//       })
//       .catch(error => {
//         // Handle errors
//         element.innerHTML = error.message;
//         // Remove the "J9_add_html" attribute even in case of error
//         element.removeAttribute("J9_add_html");
//       });
//   });
// }

// // Call the function to start the process
// addHTML();
/*⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻*/

// with Ajax

function addHTML() {
  // Select all elements with the "J9_add_html" attribute
  var elements = document.querySelectorAll("[J9_add_html]");

  // Iterate over the selected elements
  elements.forEach(function (element) {
    var fileName = element.getAttribute("J9_add_html");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        element.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", fileName, true);
    xhttp.send();
  });
}

addHTML();



function loadProfile() {
  // Retrieve the logged-in user from localStorage
  var userList = JSON.parse(localStorage.getItem("userList")) || [];
  var loggedInUser = userList.find((user) => user.loggedin);

  if (loggedInUser) {
    // Determine the profile page URL based on the user's type
    var profilePageUrl;
    if (loggedInUser.type === "employee") {
      profilePageUrl = "profile.html";
    } else if (loggedInUser.type === "recruiter") {
      profilePageUrl = "recruiter_dashboard.html";
    } else {
      // Unknown user type, handle accordingly
      console.error("Unknown user type:", loggedInUser.type);
      return;
    }

    // Redirect to the profile page
    window.location.href = profilePageUrl;
  } else {
    // No logged-in user found, redirect to login page
    console.error("No logged-in user found.");
    window.location.href = "login.html";
  }
}

