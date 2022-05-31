function solve() {
  let inputStr = document.getElementById('input').value;
  let output = document.getElementById('output');

  let input = inputStr.split('.').filter(p => p.length > 0);

  for (let i = 0; i < input.length; i += 3) {
    let arr =[];

    for (let j = 0; j < 3; j++) {
      if (input[i + j]) {
        arr.push(input[i + j]);
      }
    }

    let paragraph = arr.join('. ') + '.';
    output.innerHTML += `<p>${paragraph}</p>`
  }
}