function remove(num){
    let response = window.confirm("Are you sure you want to delete this job?");
    if (response){
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
        this.details = new details(d);
        this.address_and_location = new address_and_location(l);
        this.english_experience = new english_experience(e);
    }
}
//-------------------------------------------------------------------------------------------------------


// let array = localStorage.getItem("jobs");
// let parentNode = document.getElementsByClassName("all-jobs");
// for (let i = 0 ;i < array.length ; i++ ){
//     let txt = `<div class="job" id="${array[i].details.id}"> 
//                     <div class="job-image-div">
//                         <img src="../media/front.png" class="job-img">
//                     </div>
//                     <div class="desc">
//                         <div class="job-name"> ${array[i].details.title} </div> 
//                         <div class="salary"> ${array[i].details.salary}</div>
//                         <div class="city"> ${array[i].address_and_location.country} , ${array[i].address_and_location.city}</div>
//                         <div class="description">${array[i].details.description} </div>  
//                         <button type="button" value="Delete" class="delete-button" onclick="remove(name)" name="${array[i].details.id}">Delete</button> 
//                         <a href="#" class="view-ancor"> <button type="button" class="view-button"  value="view">view</button></a>
//                     </div>
//                 </div>`;
//     parentNode.a
// }

