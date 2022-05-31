function addItem() {
    let content = document.getElementById('newItemText').value

    let liElement = document.createElement('li');
    liElement.textContent = content;

    let ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);

    document.getElementById('newItemText').value = '';
}