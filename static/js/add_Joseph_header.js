function addHTML() {
  var el, i, domEl, fileName, xmlHttp;

  /*Iterate all DOM*/
  el = document.getElementsByTagName("*");
  for (i = 0; i < el.length; i++) {
    domEl = el[i];

    /*find the element having add-Joseph-header attribute*/
    fileName = domEl.getAttribute("add-Joseph-header");
    if (fileName) {
      /*http request with attribute value as file name*/
      xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            domEl.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            domEl.innerHTML = "Page not found.";
          }

          /* Remove the attribute and invoke the function again*/
          domEl.removeAttribute("add-Joseph-header");
          addHTML();
        }
      };
      xmlHttp.open("GET", fileName, true);
      xmlHttp.send();

      /*function ends*/
      return;
    }
  }
}
addHTML();
