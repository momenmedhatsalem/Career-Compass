// document.addEventListener("DOMContentLoaded",

  function save_changes()
  {
    // Get form inputs
    var fullname = document.getElementById("fname").value;
    var personal_email = document.getElementById("pemail").value;
    var bio = document.getElementById("bio").value;
    var company_name = document.getElementById("cname").value;
    var business_email = document.getElementById("bemail").value;
    var skills = document.getElementById("skills").value;
    var network_1 = document.getElementById("net1").value;
    var network_2 = document.getElementById("net2").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var zip_code = document.getElementById("zip").value;
    var States = document.getElementById("state").value;
    var map_location = document.getElementById("location").value;

    // Save data to local storage
    localStorage.setItem("fname", fullname);
    localStorage.setItem("pemail", personal_email);
    localStorage.setItem("bio", bio);
    localStorage.setItem("cname", company_name);
    localStorage.setItem("bemail", business_email);
    localStorage.setItem("skills", skills);
    localStorage.setItem("net1", network_1);
    localStorage.setItem("net2", network_2);
    localStorage.setItem("address", address);
    localStorage.setItem("country", country);
    localStorage.setItem("city", city);
    localStorage.setItem("zip", zip_code);
    localStorage.setItem("state", States);
    localStorage.setItem("location", map_location);

    // Optional: Display a message or perform any additional actions
    console.log("Data saved to local storage.");

}
// );
