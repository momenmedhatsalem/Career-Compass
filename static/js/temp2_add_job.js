
class job_details {
    constructor(i, ti, cn, s, y, d, c, ty, sl, minS, maxS) {
      this.id = i;
      this.title = ti;
      this.company_name = cn;
      this.status = s;
      this.years_of_experience = y;
      this.description = d;
      this.category = c;
      this.type = ty;
      this.salary = sl;
      this.MinSalary = minS;
      this.MaxSalary = maxS;
      this.creation_date = new Date();
    }
    set_job_details(d) {
      this.id = d.id;
      this.title = d.title;
      this.company_name = d.company_name;
      this.status = d.status;
      this.years_of_experience = d.years_of_experience;
      this.description = d.description;
      this.category = d.category;
      this.type = d.type;
      this.salary = d.salary;
      this.MinSalary = d.MinSalary;
      this.MaxSalary = d.MaxSalary;
      this.creation_date = d.creation_date;
    }
  }
  
  class job_english_experience {
    constructor(ef, e) {
      this.english_fluency = ef;
      this.experience = e;
    }
    set_job_english_experience(e) {
      this.english_fluency = e.english_fluency;
      this.experience = e.experience;
    }
  }
  
  class job_address_and_location {
    constructor(ad, co, ci, z, s) {
      this.address = ad;
      this.country = co;
      this.city = ci;
      this.zip_code = z;
      this.state = s;
    }
    set_job_address_and_location(l) {
      this.address = l.address;
      this.country = l.country;
      this.city = l.city;
      this.zip_code = l.zip_code;
      this.state = l.state;
    }
  }
  
  class job {
    constructor(d, e, l) {
      this.details = new job_details();
      this.details.set_job_details(d);
  
      this.english_experience = new job_english_experience();
      this.english_experience.set_job_english_experience(e)
  
  
      this.address_and_location = new job_address_and_location();
      this.address_and_location.set_job_address_and_location(l);
    }
  }
  
let array_jobs =new Array();
array_jobs.push(new job(new job_details(1,"job1","google","open",2,"the description","Designer","full time","monthly",500,550,"21-4-2024"), new job_english_experience("basic","expert"),new job_address_and_location(1,"eg","cairo","1","cairo")));
array_jobs.push(new job(new job_details(2,"job2","google","open",2,"the description","Designer","full time","monthly",600,650,"21-4-2024"), new job_english_experience("basic","expert"),new job_address_and_location(1,"eg","cairo","1","cairo")));
array_jobs.push(new job(new job_details(3,"job3","google","open",2,"the description","Designer","full time","monthly",700,750,"21-4-2024"), new job_english_experience("basic","expert"),new job_address_and_location(1,"eg","cairo","1","cairo")));
array_jobs.push(new job(new job_details(4,"job4","google","open",2,"the description","Designer","full time","monthly",800,900,"21-4-2024"), new job_english_experience("basic","expert"),new job_address_and_location(1,"eg","cairo","1","cairo")));
array_jobs.push(new job(new job_details(5,"job5","google","open",2,"the description","Designer","full time","monthly",900,950,"21-4-2024"), new job_english_experience("basic","expert"),new job_address_and_location(1,"eg","cairo","1","cairo")));
array_jobs.push(new job(new job_details(6,"job6","google","open",2,"the description","Designer","full time","monthly",400,600,"21-4-2024"), new job_english_experience("basic","expert"),new job_address_and_location(1,"eg","cairo","1","cairo")));

localStorage.setItem("jobs", JSON.stringify(array_jobs));