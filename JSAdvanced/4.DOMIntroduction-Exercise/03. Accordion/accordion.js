function toggle() {
    let textElement = document.getElementById('extra');
    let buttonElement = document.getElementsByClassName('button')[0]; // returns array and we take the first element

    if (buttonElement.textContent == 'More') {

        buttonElement.textContent = 'Less'
        textElement.style.display = 'block'
    } else {
        
        buttonElement.textContent = 'More'
        textElement.style.display = 'none'
    }
}