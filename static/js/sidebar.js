function sidebar(classname) {
    if (classname == '1') {
        document.getElementsByClassName('j0upload').style.display = block;
        document.getElementsByClassName('j0_education').style.display = none;
        document.getElementsByClassName('j0-skills').style.display = none;

    }
    else if (classname == '2') {
        document.getElementsByClassName('j0upload').style.display = none;
        document.getElementsByClassName('j0_education').style.display = block;
        document.getElementsByClassName('j0-skills').style.display = none;

    }
    else if (classname == '3') {
        document.getElementsByClassName('j0upload').style.display = none;
        document.getElementsByClassName('j0_education').style.display = none;
        document.getElementsByClassName('j0-skills').style.display = block;

    }
}