
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
    uploadedFileDiv.innerHTML = fileName;
    uploadContainer.appendChild(uploadedFileDiv);

  }

  // Event listener for file input change
  fileInput.addEventListener('change', function (event) {
    var files = event.target.files;
    for (var i = 0; i < files.length; i++) {
      updateUploadedFilesDisplay(files[i].name);
    }
  });


});

//                 education      


document.addEventListener('click', function (e) {
  if (e.target.classList.contains('j0-accordion-header')) {
    // Toggle the "active" class on the header
    e.target.classList.toggle('active');

    // Get the next sibling element
    var content = e.target.nextElementSibling;

    // Check if the content is already expanded
    if (content.style.display === 'block') {
      // If it is, collapse it
      content.style.display = 'none';
    } else {
      // If it's not, expand it
      content.style.display = 'block';
    }
  }
});


// script.js
document.addEventListener('DOMContentLoaded', function () {
  const addAccordionButton = document.getElementById('j0-edu-btn');
  const accordionContainer = document.querySelector('#accordion-container-edu');

  addAccordionButton.addEventListener('click', function () {
    // Create a new accordion section
    const newAccordion = document.createElement('div');
    newAccordion.classList.add('j0_edu-accordion');

    // Header
    const header = document.createElement('div');
    header.classList.add('j0-accordion-header');
    header.textContent = `education ${accordionContainer.children.length + 1} `;
    const collapseIcon = document.createElement('span');
    collapseIcon.style.float = 'right';
    collapseIcon.textContent = '^';
    header.appendChild(collapseIcon);

    // Content (similar to your existing content)
    const content = document.createElement('div');
    content.classList.add('j0-accordion-content');
    const titleInput = createInput('title', 'Title*', 'text', 'Product designer(google)');
    const AcademyInput = createInput('Academy', 'Academy*', 'text', 'Google Arts Collage & University');
    const startDateSelect = createSelect('startDate', 'startDate*', [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]);
    const endDateSelect = createSelect('endDate', 'endDate*', [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]);
    const descriptionTextarea = createTextarea('description', 'description*', 'Write something..');

    // Append input fields and labels to content
    content.appendChild(titleInput.label);
    content.appendChild(titleInput.input);
    content.appendChild(AcademyInput.label);
    content.appendChild(AcademyInput.input);
    content.appendChild(startDateSelect.label);
    content.appendChild(startDateSelect.select);
    content.appendChild(endDateSelect.label);
    content.appendChild(endDateSelect.select);
    content.appendChild(descriptionTextarea.label);
    content.appendChild(descriptionTextarea.textarea);

    // Append header and content to the new accordion
    newAccordion.appendChild(header);
    newAccordion.appendChild(content);

    // Append the new accordion to the container
    accordionContainer.appendChild(newAccordion);
  });

  // Helper function to create input fields and labels
  function createInput(id, labelText, type, placeholder) {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    input.setAttribute('name', id);
    input.setAttribute('placeholder', placeholder);

    return { label, input };
  }

  // Helper function to create select dropdowns and labels
  function createSelect(id, labelText, options) {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    const select = document.createElement('select');
    select.setAttribute('id', id);
    select.setAttribute('name', id);

    options.forEach(optionValue => {
      const option = document.createElement('option');
      option.setAttribute('value', optionValue);
      option.textContent = optionValue;
      select.appendChild(option);
    });

    return { label, select };
  }

  // Helper function to create textarea and label
  function createTextarea(id, labelText, placeholder) {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', id);
    textarea.setAttribute('name', id);
    textarea.setAttribute('placeholder', placeholder);
    textarea.style.height = '200px';

    return { label, textarea };
  }
});



// ----------------skils-----------------------

document.addEventListener('DOMContentLoaded', function () {
  const addAccordionButton = document.getElementById('j0-skill-btn');
  const accordionContainer = document.querySelector('#accordion-container-skills');

  addAccordionButton.addEventListener('click', function () {
    // Create a new accordion section
    const newAccordion = document.createElement('div');
    newAccordion.classList.add('j0-skills-accordion');

    // Header
    const header = document.createElement('div');
    header.classList.add('j0-accordion-header');
    header.textContent = `Skills & Experience ${accordionContainer.children.length + 1} `;
    const collapseIcon = document.createElement('span');
    collapseIcon.style.float = 'right';
    collapseIcon.textContent = '^';
    header.appendChild(collapseIcon);

    // Content (similar to your existing content)
    const content = document.createElement('div');
    content.classList.add('j0-accordion-content');
    const titleInput = createInput('title', 'Title*', 'text', 'Product designer(google)');
    const AcademyInput = createInput('Company', 'Company*', 'text', 'Google Arts Collage & University');
    const startDateSelect = createSelect('starYear', 'Start Year*', [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]);
    const endDateSelect = createSelect('endDate', 'End Year*', [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]);
    const descriptionTextarea = createTextarea('description', 'description*', 'Write something..');

    // Append input fields and labels to content
    content.appendChild(titleInput.label);
    content.appendChild(titleInput.input);
    content.appendChild(AcademyInput.label);
    content.appendChild(AcademyInput.input);
    content.appendChild(startDateSelect.label);
    content.appendChild(startDateSelect.select);
    content.appendChild(endDateSelect.label);
    content.appendChild(endDateSelect.select);
    content.appendChild(descriptionTextarea.label);
    content.appendChild(descriptionTextarea.textarea);

    // Append header and content to the new accordion
    newAccordion.appendChild(header);
    newAccordion.appendChild(content);

    // Append the new accordion to the container
    accordionContainer.appendChild(newAccordion);
  });

  // Helper function to create input fields and labels
  function createInput(id, labelText, type, placeholder) {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    input.setAttribute('name', id);
    input.setAttribute('placeholder', placeholder);

    return { label, input };
  }

  // Helper function to create select dropdowns and labels
  function createSelect(id, labelText, options) {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    const select = document.createElement('select');
    select.setAttribute('id', id);
    select.setAttribute('name', id);

    options.forEach(optionValue => {
      const option = document.createElement('option');
      option.setAttribute('value', optionValue);
      option.textContent = optionValue;
      select.appendChild(option);
    });

    return { label, select };
  }

  // Helper function to create textarea and label
  function createTextarea(id, labelText, placeholder) {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', id);
    textarea.setAttribute('name', id);
    textarea.setAttribute('placeholder', placeholder);
    textarea.style.height = '200px';

    return { label, textarea };
  }
});