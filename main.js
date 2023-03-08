const mainEl = document.querySelector('main');
const submit = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
 
submit.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Button pressed");
    

    // add button when submit is clicked
    const nameButton = document.createElement("button");
    nameButton.textContent = nameInput.value
    nameInput.value = "";
    mainEl.append(nameButton);
});