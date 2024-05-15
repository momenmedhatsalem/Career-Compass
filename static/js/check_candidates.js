// function reject(num){
//     let response = window.confirm("Are you sure you want to reject this candidate?");
//     if (response){
//         let id = ""+num;
//         let element = document.getElementById(id);
//         let parent = element.parentNode;
//         parent.removeChild(element);
//     }
    
// }

function save(id){
    console.log(id);
    button = document.getElementById("back"+id);
    if (button.style.background === 'linear-gradient(-226deg, rgb(0, 255, 91), rgb(109, 235, 237), rgb(40, 199, 250))' ){
        button.style.background ='linear-gradient(45deg, #f40f43, #ff8900, #ff003a)'; 

        const url = '/saved_candidate/'; 
        const data = {
            id_for_applicant: id,
            action : 'save'
        };

        fetch(url, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'saved_candidate/json',
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
        button.style.background = 'linear-gradient(-226deg, rgb(0, 255, 91), rgb(109, 235, 237), rgb(40, 199, 250))';
        
        const url = '/saved_candidate/'; 
        const data = {
            id_for_applicant: id,
            action : 'unsave'
        };

        fetch(url, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'saved_candidate/json',
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