/* made by Philo */

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

let ggg = new job_details();
let hhh = new job_english_experience();
let jjj = new job_address_and_location();

j1 = new job(ggg,hhh,jjj);

j1.details.id = 12;
j1.english_experience.experience = 2;
j1.address_and_location.city = "cairo";
console.log(j1.details.id);
console.log(j1.english_experience.experience);
console.log(j1.address_and_location.city);
