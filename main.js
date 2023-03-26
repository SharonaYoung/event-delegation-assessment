const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const namesEl = document.querySelector('#nameBtns');

// function for submit button 
form.addEventListener('submit', function(event){
    event.preventDefault();
  
    // add button when submit is clicked
    const nameButton = document.createElement("button");
    // place name entered on button
    nameButton.textContent = nameInput.value
    nameButton.classList.add("name");     
    namesEl.append(nameButton);
    // clear input box
    nameInput.value = "";
})

// function for each button
namesEl.addEventListener('click', function(event) {
    // event.preventDefault();
    if(event.target.matches(".name")) {
        console.log(event.target.innerText);
    }
});