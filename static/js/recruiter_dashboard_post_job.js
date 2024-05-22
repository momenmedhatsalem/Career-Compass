document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("J9_recruiter_add_job_form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const form = this;
      const formData = new FormData(form);
      const url = form.getAttribute("action");

      fetch(url, {
        method: "POST",
        headers: {
          "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]")
            .value,
        },
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.exists) {
            alert("The job ID already exists for you.");
          } else {
            alert("Job posted successfully.");
            form.reset(); // Optionally reset the form here
            window.location.href = "/recruiterDashboard/";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
});
