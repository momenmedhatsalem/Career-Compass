
let jobs = JSON.parse(localStorage.getItem("jobs"));
let id = JSON.parse(localStorage.getItem("id_of_edit_job"));
//on load
for(let job of jobs){
    if(job.details.id == id){        
        document.getElementById("id").value = job.details.id;
        document.getElementById("job-title").value = job.details.title;
        document.getElementById("company-name").value = job.details.company_name;
        document.getElementById("years-of-experience").value = job.details.years_of_experience;
        document.getElementById("salary").value = job.details.MinSalary;
        document.getElementsByTagName("textarea")[0].innerHTML = job.details.description;
        // document.getElementById("username").innerHTML = job.details.id;

        break;
    }
}


function save_edit(){ 
    let jobs = JSON.parse(localStorage.getItem("jobs"));
    let id = JSON.parse(localStorage.getItem("id_of_edit_job"));
    for(let job of jobs){
        if(job.details.id == id){
            job.details.title =document.getElementById("job-title").value;
            job.details.company_name = document.getElementById("company-name").value;
            job.details.years_of_experience =document.getElementById("years-of-experience").value;
            job.details.MinSalary = document.getElementById("salary").value ;
            job.details.description = document.getElementsByTagName("textarea")[0].innerHTML ;
            break;
        }
    }
    localStorage.removeItem("jobs");
    localStorage.setItem("jobs",JSON.stringify(jobs));
}

function press_edit_button(job_id){
    localStorage.setItem("id_of_edit_job",JSON.stringify(job_id));
}
