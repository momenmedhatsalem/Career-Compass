
// Initializeing variables we will use in determining which 
// searching mode we are using

var search_by = "";
old_option = "title";


    
function set_search_by(opt = "title") {

    //document.getElementById("search_text") = "";

    if(opt == "title")
    {
        document.getElementById("jobs").innerHTML =
        "   <option value=\"Software Developer\">Software Developer</option> \
            <option value=\"Front-end Developer\">Front-end Developer</option> \
            <option value=\"Back-end Developer\">Back-end Developer</option> \
            <option value=\"Full-stack Developer\">Full-stack Developer</option> \
            <option value=\"Graphics Designer\">Graphics Designer</option> \
            <option value=\"Project Manager\">Project Manager</option> \
            <option value=\"Game Developer\">Game Developer</option> \
            <option value=\"Sales Manager\">Sales Manager</option> \
            <option value=\"Intern\">Intern</option> ";
    }
    else if(opt == "years")
    {
        document.getElementById("jobs").innerHTML =
           "<option value=\"0\">0</option> \
            <option value=\"1\">1</option> \
            <option value=\"2\">2</option> \
            <option value=\"3\">3</option> \
            <option value=\"4\">4</option> \
            <option value=\"5\">5</option> \
            <option value=\"7\">7</option> \
            <option value=\"10\">10</option> ";
    }
    else if(opt == "country")
    {   
        document.getElementById("jobs").innerHTML =
           "<option value=\"Egypt\">Egypt</option> \
            <option value=\"USA\">USA</option> \
            <option value=\"Germany\">Germany</option> \
            <option value=\"France\">France</option> \
            <option value=\"Spain\">Spain</option> \
            <option value=\"Bahrain\">Bahrain</option> \
            <option value=\"Saudi Arabia\">Saudi Arabia</option> \
            <option value=\"Russia\">Russia</option> ";
    }
    

    // change css of past selected mode back to normal
    document.getElementById(old_option).style.backgroundColor = "#ddd";
    document.getElementById(old_option).style.color = "black";

    // set the current searching mode according to what is sent as a parameter 'opt'
    search_by = opt;
    old_option = search_by;

    // make results section disappear again to be ready for a new search
    document.getElementById("result").style.display = "none";
    document.getElementById("result-grid").style.display = "none";

    // make the selected mode blue in color and white in backg color
    document.getElementById(opt).style.backgroundColor = "rgb(0, 136, 255)";
    document.getElementById(opt).style.color = "white";

}
// make the array we will use to get array of dictionaries with matching jobs
var search_results = []

// the backend request
function requestBackend() {

    // we get the text value and the mode we want to search with
    search_text = document.getElementById('search_text').value;
    search_text = search_text.toLowerCase();

    // we put them in dictionary to ease sending the data and using it on the backend
    RequestData = {
        'text': search_text,
        'mode': search_by
    };

    // we make the AJAX request to the back end with the appropiate url that calls the searching view
    fetch('/filter_search/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // send the dictionary that carries all the request data using stringify to format it correctly
        body: JSON.stringify(RequestData)
    })
        .then(response => response.json())
        .then(ResponseData => {

            // we take the response from the backend 'result' which is an array of dictionaries
            // carried inside the respone body 'ResponseData' which carries all values we need
            // from the 'Job' object that we got from the backend and
            // store it inside 'search_results' to be easy to use later on
            search_results = ResponseData.result;

            // then we call 'showmatches()' to put that data in search_results inside the
            // html template which will be displayed on the browser
            showmatches(search_results);
            
        })
}

// shows data from 'search_results' one by one as search results in card form
function showmatches(search_results) {
    // tests
    console.log(search_results);
    console.log(search_results[0]);

    card_id = 1;

    // we update the total number of results found to the langth of 'search_results'
    document.getElementById("num_of_results").innerHTML = search_results.length;

    // if user pressed search button on an empty search bar we end the function and do nothing more
    if (document.getElementById("search_text").value == "")
        return;

    // if not we show the results section in our html template
    // to be ready for showing search results cards
    document.getElementById("result").style.display = "flex";
    document.getElementById("result-grid").style.display = "flex";

    // we first clear previous results before displaying the new results
    document.getElementById("result-grid").innerHTML = "";

    // we loop on each result (job) from search_results (matching jobs) and use each kry to display 
    // each value in its right palace on the webpage
    for (let result of search_results) 
    {
        console.log(search_results[0]);
        document.getElementById("result-grid").innerHTML +=
        "<div class=\"M7-card1 M7-filter-item\" id=\"" + card_id + "\">" +
        "<fieldset>" +
        "<h4>" +
        result['title'] +
        "</h4>" +
        "<p>" +
        result['salary'] + "$ | " + result['exp'] + " Exp. years | " + result['country'] +
        "</p>" +
        //'<a href="#">' +
        '<button class="M7-button" style="display: inline;"' +
        ' onclick="view_job_details(' + result['job_id']  + ', \'' + result['rec_username'] + '\')">More info</button>' +
        //"</a>" +
        "</fieldset>" +
        "</div>";
        card_id++;
    }

    // test
    console.log(search_results)
}

// thsi function is responsible for sorting according to user's action
function sort(dir) {

    // salary 'high to low' sorting
    if (dir == "htl") {
        search_results.sort((a, b) => b['salary'] - a['salary']); // Desc
    }

    // salary 'low to high' sorting
    else if (dir == "lth") {
        search_results.sort((a, b) => a['salary'] - b['salary']); // Asc
    }

    // Exp. years 'high to low' sorting
    else if (dir == "htly") {
        search_results.sort((a, b) => b['exp'] - a['exp']); // Desc
    }

    // Exp. years 'low to high' sorting
    else if (dir == "lthy") {
        search_results.sort((a, b) => a['exp'] - b['exp']); // Asc
    }

    // then show results again to display them after sorting
    showmatches(search_results)
}


function view_job_details(job_id, rec_username)
{
    dest_job_id = job_id;
    dest_rec_username = rec_username;

    window.location.href = "/job/" + job_id + "/" + rec_username + "/";
    
}

