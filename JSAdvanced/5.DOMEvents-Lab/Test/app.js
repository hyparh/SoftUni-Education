function addItem() {
    let content = document.getElementById('newItemText').value;

    let newLi = document.createElement('li');
    newLi.textContent = content;

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    newLi.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);
    document.getElementById('items').appendChild(newLi);
    document.getElementById('newItemText').value = '';

    function onDelete(event) {
        event.target.parentElement.remove();
    }
}