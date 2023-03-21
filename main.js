const mainEl = document.querySelector('main');
const submit = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
const button = document.querySelectorAll('button');

// array to hold names
const names = [];
 
mainEl.addEventListener('click', function(event) {
    event.preventDefault();
    if(event.target.matches("#enterName")) {
           
    // add button when submit is clicked
    const nameButton = document.createElement("button");
    // place name entered on button
    nameButton.textContent = nameInput.value        
    mainEl.append(nameButton);
    // add name to array
    names.push(nameInput.value);
    nameInput.value = "";
    }
});