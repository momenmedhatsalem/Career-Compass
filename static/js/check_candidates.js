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
    if (button.style.background === 'transparent' ){
        button.style.background ='linear-gradient(-226deg, #00ff5b, #6debed, #28c7fa)'; 

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
        button.style.background = 'transparent';
        
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