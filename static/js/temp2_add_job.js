let array_jobs =new Array();
array_jobs.push(new job(new details(1,"job1","google","open",2,"the description","1","1",500), new english_experience("1","2"),new address_and_location(1,"eg","cairo","")));
array_jobs.push(new job(new details(2,"job2","google","open",2,"the description","1","1",500), new english_experience("1","2"),new address_and_location(1,"eg","cairo","")));
array_jobs.push(new job(new details(3,"job3","google","open",2,"the description","1","1",500), new english_experience("1","2"),new address_and_location(1,"eg","cairo","")));
array_jobs.push(new job(new details(4,"job4","google","open",2,"the description","1","1",500), new english_experience("1","2"),new address_and_location(1,"eg","cairo","")));
array_jobs.push(new job(new details(5,"job5","google","open",2,"the description","1","1",500), new english_experience("1","2"),new address_and_location(1,"eg","cairo","")));
array_jobs.push(new job(new details(6,"job6","google","open",2,"the description","1","1",500), new english_experience("1","2"),new address_and_location(1,"eg","cairo","")));


console.log(array_jobs[0].details.id);
localStorage.setItem("my_jobs", JSON.stringify(array_jobs));