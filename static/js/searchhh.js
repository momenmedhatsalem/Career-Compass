var images = [
    "../media/Game dev.jpg",
    "/media/front end.jpg",
    "/media/Game dev.jpg",
    "/media/graphics.jpg",
    "/media/sales manger.jpg",
    "/media/software.jpg",
    "/media/ui ux.jpg"
];

// Create an object with the data to send to the backend
// var dataToSend = {
    //     '0': 'value1',
    //     '1': 'value2'
    // };
    // var dataToSend = "i sent you this";
    var search_by = "";
    old_option = "title";
    
    function set_search_by(opt = "title") {
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
    
var search_results = []

function requestBackend() {

    search_text = document.getElementById('search_text').value;
    search_text = search_text.toLowerCase();

    search_mode = "none"

    RequestData = {
        'text': search_text,
        'mode': search_by
    };

    // Make the AJAX request
    fetch('/filter_search/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(dataToSend)
        body: JSON.stringify(RequestData)
    })
        .then(response => response.json())
        .then(ResponseData => {
            
            search_results = ResponseData.result;
            showmatches(search_results);
            
        })
}

function showmatches(search_results) {
    console.log(search_results);
    console.log(search_results[0]);

    document.getElementById("num_of_results").innerHTML = search_results.length;

    if (document.getElementById("search_text").value == "")
        return;

    document.getElementById("result").style.display = "flex";
    document.getElementById("result-grid").style.display = "flex";

    document.getElementById("result-grid").innerHTML = "";
    for (let result of search_results) 
    {
        console.log(search_results[0]);
        document.getElementById("result-grid").innerHTML +=
        '<div class="M7-card1 M7-filter-item">' +
        "<fieldset>" +
        "<img src=\"" + images[Math.floor(Math.random() * images.length)] + "\" alt=\"open job icon\" width=\"100%\" height=\"30%\"\>" +
        "<h4>" +
        result['title'] +
        "</h4>" +
        "<p>" +
        result['salary'] + "$ | " + result['exp'] + " Exp. years | " + result['country'] +
        "</p>" +
        '<a href="#">' +
        '<button class="M7-button" style="display: inline;">Apply</button>' +
        "</a>" +
        "</fieldset>" +
        "</div>";
    }
    //console.log(search_results)
}


function sort(dir) {
    if (dir == "htl") {
        search_results.sort((a, b) => b['salary'] - a['salary']); // Desc
    }
    else if (dir == "lth") {
        search_results.sort((a, b) => a['salary'] - b['salary']); // Asc
    }
    else if (dir == "htly") {
        search_results.sort((a, b) => b['exp'] - a['exp']); // Desc
    }
    else if (dir == "lthy") {
        search_results.sort((a, b) => a['exp'] - b['exp']); // Asc
    }
    showmatches(search_results)
}

