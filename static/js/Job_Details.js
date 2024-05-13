function save(id){
    console.log(id);
    button = document.getElementById("x"+id);
    if (button.style.backgroundColor === 'transparent' ){
        button.style.backgroundColor ='green'; 

        const url = '/receive_job_to_save_it/'; 
        const data = {
            id_for_job_will_save: id,
            action : 'save'
        };

        fetch(url, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    else{
        button.style.backgroundColor = 'transparent';
        
        const url = '/receive_job_to_save_it/'; 
        const data = {
            id_for_job_will_save: id,
            action : 'unsave'
        };

        fetch(url, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

function confirmApplication(job_id,applicant_id) {
    if (confirm("Are you sure you want to apply for this job?")) {
        const url = '/apply_to_job/'; 
        const data = {
            job: job_id,
            applicant : applicant_id
        };

        fetch(url, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            window.location.href = data.redirect_url;       })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  }
