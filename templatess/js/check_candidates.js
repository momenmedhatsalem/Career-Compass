function reject(num){
    let response = window.confirm("Are you sure you want to reject this candidate?");
    if (response){
        let id = ""+num;
        let element = document.getElementById(id);
        let parent = element.parentNode;
        parent.removeChild(element);
    }
    
}