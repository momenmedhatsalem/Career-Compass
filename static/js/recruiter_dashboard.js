
// document.addEventListener("click", function (event) {
//   if (event.target.classList.contains("J9_to_path")) {
//     var J9_to_path = event.target.getAttribute("J9_to_path");
//     document
//       .getElementById("J9_main_container")
//       .setAttribute("J9_add_html", J9_to_path);
//     addHTML();
//   }
// });


document.addEventListener("click", function(event) {
  var J9_to_path = event.target.getAttribute("J9_to_path");
  if (J9_to_path !== null) {
    document.getElementById("J9_main_container").setAttribute("J9_add_html", J9_to_path);
    addHTML();
  }
});
