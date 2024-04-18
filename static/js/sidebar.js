 function sidebar(classname) {

    window.location.href = "/templatess/resume_education_skills.html"

    if (classname == '1') {        
        document.getElementsByClassName('j0upload')[0].style.display = "block";
        document.getElementsByClassName('j0_education')[0].style.display = "none";
        document.getElementsByClassName('j0-skills')[0].style.display = "none";
            
    }
    else if (classname == '2') {
        document.getElementsByClassName('j0upload')[0].style.display = "none";
        document.getElementsByClassName('j0_education')[0].style.display = "block";
        document.getElementsByClassName('j0-skills')[0].style.display = "none";
    }
    else if (classname == '3') {
        document.getElementsByClassName('j0upload')[0].style.display = "none";
        document.getElementsByClassName('j0_education')[0].style.display = "none";
        document.getElementsByClassName('j0-skills')[0].style.display = "block";
    }
    }


