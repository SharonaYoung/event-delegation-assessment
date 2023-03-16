const mainEl = document.querySelector('main');
const submit = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
const button = document.querySelectorAll('button');

const names = [];
 
mainEl.addEventListener('click', function(event) {
    event.preventDefault();
    if(event.target.matches("#submit")) {
       console.log("button");
       
    // add button when submit is clicked
    const nameButton = document.createElement("button");
    nameButton.textContent = nameInput.value
    
    if(names.includes(nameInput.value)) {
        console.log("repeat");
        
        // add button next to existing button with the same name     
    }
    
    mainEl.append(nameButton);

    names.push(nameInput.value);
    console.log(names);
    nameInput.value = "";
    }
});
    

    
