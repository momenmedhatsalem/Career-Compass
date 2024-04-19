
class job {

    constructor(title, exp, pay, country)
    {
        this.title = title;
        this.exp = exp;
        this.pay = pay;
        this.country = country;
    }
};

var job0 = new job("software developer", "3", 2000, "USA");
var job1 = new job("software developer", "2", 3400, "Germany");
var job2 = new job("software developer", "0", 3000, "France");
var job3 = new job("front-end developer", "5", 1500, "Egypt");
var job4 = new job("front-end developer", "3", 2000, "UAE");
var job5 = new job("graphics designer", "6", 2300, "Spain");
var job6 = new job("graphics designer", "2", 1900, "Russia");
var job7 = new job("game developer", "3", 4000, "Russia");

var job_array = [];

job_array.push(job0);
job_array.push(job1);
job_array.push(job2);
job_array.push(job3);
job_array.push(job4);
job_array.push(job5);
job_array.push(job6);
job_array.push(job7);

localStorage.setItem("jobs", JSON.stringify(job_array))

// console.log(job_array[3].title);

