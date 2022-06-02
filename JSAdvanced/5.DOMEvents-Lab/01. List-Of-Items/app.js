function addItem() {
    let content = document.getElementById('newItemText').value; // get the input text
    let liElement = document.createElement('li'); // create new 'li' element
    liElement.textContent = content; // put the input text into our 'li' element

    let ulElement = document.getElementById('items'); // get the 'ul' element
    ulElement.appendChild(liElement); // put our 'li' element into the 'ul'

    document.getElementById('newItemText').value = ''; // clear the text out of our text box
}