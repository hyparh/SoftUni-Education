function addItem() {
    let content = document.getElementById('newItemText').value;

    let liElement = document.createElement('li');
    liElement.textContent = content;

    let deleteBtn = document.createElement('a'); // create new anchor element
    deleteBtn.textContent = '[Delete]'; // its text content will be 'Delete'
    deleteBtn.href = '#';
    liElement.appendChild(deleteBtn); // add delete btn to the 'li' element

    deleteBtn.addEventListener('click', onDelete); // add event listener
    document.getElementById('items').appendChild(liElement); // append the 'li' element (and delete btn) to 'items'
    document.getElementById('newItemText').value = '';

    function onDelete(event) { // function for the event listener
        event.target.parentElement.remove();
    }
}