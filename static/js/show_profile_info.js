document.addEventListener("DOMContentLoaded", function() {

    // localStorage.clear() 

  // retrieve data from local storage and show them on the form
  document.getElementById("fname").value = localStorage.getItem("fname");
  document.getElementById("pemail").value = localStorage.getItem("pemail");
  document.getElementById("bio").value = localStorage.getItem("bio");
  document.getElementById("cname").value = localStorage.getItem("cname");
  document.getElementById("bemail").value = localStorage.getItem("bemail");
  document.getElementById("skills").value = localStorage.getItem("skills");
  document.getElementById("net1").value = localStorage.getItem("net1");
  document.getElementById("net2").value = localStorage.getItem("net2");
  document.getElementById("address").value = localStorage.getItem("address");
  document.getElementById("country").value = localStorage.getItem("country");
  document.getElementById("city").value = localStorage.getItem("city");
  document.getElementById("zip").value = localStorage.getItem("zip");
  document.getElementById("state").value = localStorage.getItem("state");
  document.getElementById("location").value = localStorage.getItem("location");

  
  console.log("Data retrived and showed from local storage.");
});