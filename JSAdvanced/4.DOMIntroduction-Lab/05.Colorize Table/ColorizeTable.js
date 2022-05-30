function colorize() {
    let rows = document.querySelectorAll("table tr"); // select all rows (tr)
    let index = 0;

    for (let row of rows) {
        index++;

        if (index % 2 == 0)
        row.style.background = "teal"; // make the background of selected text teal
    }
}