// document.addEventListener("DOMContentLoaded", function() {


function search() {

    // check if the search bar is empty or not
    if(document.getElementById("search_text").value == "")
        return;

    // show the results html block which carries the results as cards
    document.getElementById("result").style.display = "flex";
    document.getElementById("result-grid").style.display = "flex";


    // define "sub" to store search text
    // and "jobs" to retrieve "jobs" array form localstorage
    // and "matches" to store atching jobs based on "sub"

    var sub = document.getElementById("search_text").value;



    let jobs = JSON.parse(localStorage.getItem("jobs"));
    var matches = [];

    // make "sub" lowerCase to standardize our search
    sub = sub.toLowerCase();

    // test: --> (jobs arrived safely from localstorage)
    // console.log(jobs[2].pay);

    // loop through "jobs" and push any "job" having a ".title" including a substring of "sub"
    for (let job of jobs) {
        console.log(job)
    // Check if job has 'details' property and 'title' property within it
    if (
      job.details &&
      job.details.title &&
      job.details.title.toLowerCase().includes(sub)
    ) {
      matches.push(job);
    }
    }


    // set our "# of found jobs" in the html page to
    // the actual number of jobs we found ad already pushed inside "matches"
    document.getElementById("num_of_results").innerHTML = matches.length;

    // test: --> ("matches" is populated correctly)
    // for(let match of matches)
    // {
    //     console.log(match.pay); 
    // }
    
    // sort all matches in the order selected in the sort by field

    if(document.getElementById("filter").value == "High - Low")
    {
        matches.sort((a, b) => b.pay - a.pay)   // Desc
    }
    else if(document.getElementById("filter").value == "Low - High")
    {
        matches.sort((a, b) => a.pay - b.pay)   // Asc
    }

    // now we show the results in "matches" as cards in our page  بسم الله

    document.getElementById("result-grid").innerHTML = "";

for (let match of matches) {
  document.getElementById("result-grid").innerHTML +=
    '<div class="M7-card1 M7-filter-item">' +
    "<fieldset>" +
    "<h4>" +
    match.details.title +
    "</h4>" +
    "<p>" +
    match.details.status +
    "</p>"
    +
    "<p>" +
    match.address_and_location.country +
    "</p>" +
    '<a href="#">' +
    '<button class="M7-button" style="display: inline;">Apply</button>' +
    "</a>" +
    "</fieldset>" +
    "</div>";
}




}



// })