function deleteByEmail() {
    let value = document.querySelector('input[name="email"]').value;
    let rows = document.querySelectorAll('tbody tr');

    let found = false;

    for (let row of rows) {
        if (row.children[1].textContent == value) { // is text from the child equals email text
            let parent = row.parentElement; // get parent element
            parent.removeChild(row); // remove the child from parent
            found = true;
        }
    }

    if (found) {
        document.getElementById('result').textContent = 'Deleted.';
    }
    else {
        document.getElementById('result').textContent = 'Not found.';
    }   
}