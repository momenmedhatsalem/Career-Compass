//delete job
function remove(num){
    let response = window.confirm("Are you sure you want to unsaved this job?");
    if (response){
        const url = '/receive_job_to_save_it/'; 
        const data = {
            id_for_job_will_save: num,
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

        let id = ""+num;
        let element = document.getElementById(id);
        let parent = element.parentNode;
        parent.removeChild(element);
    }
    
}

//--------------------------------------------------------------------------------------------------------------------------
class details{
    constructor(i,ti,cn,s,y,d,c,ty,sl){
    this.id = i;
    this.title = ti ;
    this.company_name = cn; 
    this.statu = s;
    this.years_of_experience = y;
    this.description = d;
    this.category = c;
    this.type = ty;
    this.salary =sl;
    }
    details(d){
        this.id = d.id;
        this.title =  d.title ;
        this.company_name = d.company_name; 
        this.statu = d.statu;
        this.years_of_experience = d.years_of_experience;
        this.description = d.description;
        this.category = d.category;
        this.type =  d.type;
        this.salary = d.salary;
        return this;
    }
    
}   

class english_experience {
    costactor(ef,e){
        this.english_fluency = ef;
        this.experience = e;
    }
    english_experience (e){
        this.english_fluency = e.english_fluency;
        this.experience = e.experience ;
    }
}
class address_and_location{
    constructor(ad,co,ci,z,s){
        this.address = ad ;
        this.country = co; 
        this.city = ci; 
        this.zip_code = z; 
        this.state = s;
    }
    address_and_location(l){
        this.address = l.address ;
        this.country = l.country; 
        this.city = l.city; 
        this.zip_code = l.zip_code; 
        this.state = l.state;
    }
}

class job{
    constructor(d,l,e){
        this.details = d;
        this.english_experience = l;
        this.address_and_location = e;
    }
}
//-------------------------------------------------------------------------------------------------------

//add jos to page 

// let array1 = JSON.parse(localStorage.getItem("jobs"))
// let array2 = JSON.parse(localStorage.getItem("my_jobs"));
// let p = document.getElementsByClassName("all-jobs");
// //console.log(array2);
// // for (let job of array1 ){
// //     let txt = `
// //                     <div class="job-image-div">
// //                         <img src="../media/front.png" class="job-img">
// //                     </div>
// //                     <div class="desc">
// //                         <div class="job-name"> ${job.details.title} </div> 
// //                         <div class="salary"> ${job.details.salary}</div>
// //                         <div class="city"> ${job.address_and_location.country} , ${job.address_and_location.city}</div>
// //                         <div class="description">${job.details.description} </div>  
// //                         <button type="button" value="Delete" class="delete-button" onclick="remove(name)" name="${job.details.id}">Delete</button> 
// //                         <a href="#" class="view-ancor"> <button type="button" class="view-button"  value="view">view</button></a>
// //                     </div>`;
// //     let element = document.createElement("div");
// //     element.setAttribute("class","job");
// //     element.setAttribute("id",job.details.id);
// //     element.innerHTML= txt;
// //     p[0].appendChild(element);
// // }
// for (let job of array2 ){
//     let txt = `
//                     <div class="job-image-div">
//                         <img src="../media/front.png" class="job-img">
//                     </div>
//                     <div class="desc">
//                         <div class="job-name"> ${job.details.title} </div> 
//                         <div class="salary"> ${job.details.salary}</div>
//                         <div class="city"> ${job.address_and_location.country} , ${job.address_and_location.city}</div>
//                         <div class="description">${job.details.description} </div>  
//                         <button type="button" value="Delete" class="delete-button" onclick="remove(name)" name="${job.details.id}">Delete</button> 
//                         <a href="#" class="view-ancor"> <button type="button" class="view-button"  value="view">view</button></a>
//                     </div>`;
//     let element = document.createElement("div");
//     element.setAttribute("class","job");
//     element.setAttribute("id",job.details.id);
//     element.innerHTML= txt;
//     p[0].appendChild(element);
//     }
