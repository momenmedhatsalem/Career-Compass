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


let array = localStorage.getItem("jobs");
let p = document.querySelector("table tr");
for (let i = 0 ;i < array.length ; i++ ){
    let txt = `<td class="td">
                    <h3>
                    <a class="p2a" href="Job_Details.html"> ${array.details.title} </a>
                    </h3>
                    <div class="salary"> ${array.details.salary}</div>
                    <div class="location"> ${array.address_and_location.country}</div>
                    <a class="p2a" href="#"><button>Apply</button></a>
                </td>`;
    p[0].appendChild(txt);
}
