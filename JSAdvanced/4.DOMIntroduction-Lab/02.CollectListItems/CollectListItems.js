function extractText() {
    let itemNodes = document.querySelectorAll("ul#items li");
    let textarea = document.querySelector("#result");

    for (let node of itemNodes) {
        textarea.value += node.textContent + "\n";
    }

    // variant II (does not work correctly in Judge)

    // const items = Array.from(document.querySelectorAll('li'));
    // const result = item.map(e => e.textContent).join('\n');

    // document.getElementById('result').value = result;
}