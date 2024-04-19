
function manageTabs(id) {
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(id).style.display = 'block';
}




document.addEventListener('DOMContentLoaded', function () {
  var fileInput = document.getElementById('j0-uploadCV');
  var uploadButton = document.querySelector('.j0-btn label');

  // Function to update the display of uploaded files
  function updateUploadedFilesDisplay(fileName) {
    var uploadContainer = document.querySelector('.j0-input');
    var uploadedFileDiv = document.createElement('div');
    uploadedFileDiv.classList.add('j0-upload');
    uploadedFileDiv.innerHTML = fileName + '<span class="j0-remove-btn"">x</span>';
    uploadContainer.appendChild(uploadedFileDiv);

  }

  // Event listener for file input change
  fileInput.addEventListener('change', function (event) {
    var files = event.target.files;
    for (var i = 0; i < files.length; i++) {
      updateUploadedFilesDisplay(files[i].name);
    }
  });



  // Event delegation to handle removal of uploaded files
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('j0-remove-btn')) {
      event.preventDefault();
      event.target.closest('.j0-upload').remove();
      updateUploadedFilesDisplay(files[i].name);
    }
  });

});
