

var images = [
    "/media/data analyst.png",
    "/media/front end.jpg",
    "/media/Game dev.jpg",
    "/media/graphics.jpg",
    "/media/sales manger.jpg",
    "/media/software.jpg",
    "/media/ui ux.jpg"
];

var matches = [];
search_by = "";
old_option = "title";

function set_search_by(opt = "title")
{
    document.getElementById(old_option).style.backgroundColor = "#ddd";
    document.getElementById(old_option).style.color = "black";

    search_by = opt;
    old_option = search_by;
    
    matches = [];
    
    document.getElementById("result").style.display = "none";
    document.getElementById("result-grid").style.display = "none";
    
    document.getElementById(opt).style.backgroundColor = "rgb(0, 136, 255)";
    document.getElementById(opt).style.color = "white";
    
}

document.addEventListener("load", set_search_by());

function search() {

    // check if the search bar is empty or not
    if (document.getElementById("search_text").value == "")
        return;
    
    // show the results html block which carries the results as cards
    document.getElementById("result").style.display = "flex";
    document.getElementById("result-grid").style.display = "flex";


    // define "sub" to store search text
    // and "jobs" to retrieve "jobs" array form localstorage
    // and "matches" to store atching jobs based on "sub"

    var sub = document.getElementById("search_text").value;
    let jobs = JSON.parse(localStorage.getItem("jobs"));


    // make "sub" lowerCase to standardize our search
    
    
    // sub = sub.toLowerCase();


    // test: --> (jobs arrived safely from localstorage)
    // console.log(jobs[2].details.MaxSalary);

    // loop through "jobs" and push any "job" having a ".title" including a substring of "sub"
    matches = [];

    console.log(search_by);

    if(search_by == "title")
    {

        for (let job of jobs)
        {
            // console.log(job)
            // Check if job has 'details' property and 'title' property within it
            if (job.details.title.toLowerCase().includes(sub.toLowerCase())) 
            {
                matches.push(job);
            }
        }
    }
    else if(search_by == "years")
    {
        
        for (let job of jobs)
        {
            // console.log(job)
            // Check if job has 'details' property and 'title' property within it
            if (job.details.years_of_experience <= sub) 
            {
                matches.push(job);
            }
        }

        if(isNaN(sub))
        {
            matches = [];
        }
    }
    else if(search_by == "country")
    {
        for (let job of jobs)
        {
            //console.log(job)
            // Check if job has 'details' property and 'title' property within it
            if (job.address_and_location.country.toLowerCase().includes(sub.toLowerCase()))
            {
                matches.push(job);
            }
        }
    }


    // set our "# of found jobs" in the html page to
    // the actual number of jobs we found ad already pushed inside "matches"
    document.getElementById("num_of_results").innerHTML = matches.length;

    // test: --> ("matches" is populated correctly)
    // for(let match of matches)
    // {
    //     console.log(match.details.MaxSalary); 
    // }

    // sort all matches in the order selected in the sort by field
    console.log(document.getElementById("filter").value);


    document.getElementById("result-grid").innerHTML = "";

    showmatches(matches);
    // var matches = [];



}

function sort(dir) {
    if (dir == "htl") {
        matches.sort((a, b) => b.details.MaxSalary - a.details.MaxSalary); // Desc
    }
    else if (dir == "lth") 
    {
        matches.sort((a, b) => a.details.MaxSalary - b.details.MaxSalary); // Asc
    }
    else if (dir == "htly") 
    {
        matches.sort((a, b) => b.details.years_of_experience - a.details.years_of_experience); // Desc
    }
    else if (dir == "lthy") 
    {
        matches.sort((a, b) => a.details.years_of_experience - b.details.years_of_experience); // Asc
    }
    showmatches()
}

// })

// now we show the results in "matches" as cards in our page  بسم الله
function showmatches() {
    document.getElementById("result-grid").innerHTML = "";
    for (let match of matches) {
        document.getElementById("result-grid").innerHTML +=
            '<div class="M7-card1 M7-filter-item">' +
            "<fieldset>" +
            "<img src=\"" + images[Math.floor(Math.random() * images.length)] + "\" alt=\"open job icon\" width=\"100%\" height=\"30%\"\>" +
            "<h4>" +
            match.details.title +
            "</h4>" +
            "<p>" +
            match.details.MaxSalary + "$ | " + match.details.years_of_experience + " Exp. years | " + match.address_and_location.country +
            "</p>" +
            // "<p>" +
            // match.address_and_location.country +
            // "</p>" +
            '<a href="#">' +
            '<button class="M7-button" style="display: inline;">Apply</button>' +
            "</a>" +
            "</fieldset>" +
            "</div>";
    }
    // var matches = [];
}