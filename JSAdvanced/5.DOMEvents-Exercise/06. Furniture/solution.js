// function solve() {
//   let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
//   generateBtn.addEventListener('click', generate);
//   buyBtn.addEventListener('click', buy);

//   function generate(e) {
//     let input = JSON.parse(document.querySelector('textarea').value); 

//     input.forEach(x => {
//       let tr = document.createElement('tr');
//       let td1 = document.createElement('td');
//       let img = document.createElement('img');
//       img.src = x.img;
//       td1.appendChild(img);
//       tr.appendChild(td1);
//       let td2 = document.createElement('td');
//       let p = document.createElement('p');
//       p.textContent = x.name;
//       td2.appendChild(p);
//       tr.appendChild(td2);
//       let td3 = document.createElement('td');
//       let p2 = document.createElement('p');
//       p2.textContent = Number(x.price);
//       td3.appendChild(p2);
//       tr.appendChild(td3);
//       let td4 = document.createElement('td');
//       let p3 = document.createElement('p');
//       p3.textContent = Number(x.decFactor);
//       td4.appendChild(p3);
//       tr.appendChild(td4);
//       let td5 = document.getElementById('td');
//       let input = document.createElement('input');
//       input.type = 'checkbox';
//       td5.appendChild(input);
//       tr.appendChild(td5);
//       document.querySelector('tbody').appendChild(tr);
//     });
//   }

//   function buy(e) {
//     let checkboxes = Array.from(document.querySelectorAll('tbody input')).filter(c => c.checked);
//     let bought = [];
//     let price = 0;
//     let decoration = 0;

//     checkboxes.forEach(x => {
//       let parent = x.parentElement.parentElement;
//       let data = Array.from(parent.querySelectorAll('p'));
//       bought.push(data[0].textContent);
//       price += Number(data[1].textContent);
//       decoration += Number(data[2].textContent);
//     });

//     let output = document.querySelectorAll('textarea')[1];
//     output.textContent += `Bought furniture: ${bought.join(', ')}\r\n`;
//     output.textContent += `Total price: ${price.toFixed(2)}\r\n`;
//     output.textContent += `Average decoration factor: ${decoration / checkboxes.length}`
//   }
// }

function solve() {
  const table = document.querySelector('table.table tbody');

  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(ev) {
    const data = JSON.parse(input.value);

    for (let item of data) {
      const row = document.createElement('tr');

      const imgCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const priceCell = document.createElement('td');
      const decFacCell = document.createElement('td');
      const checkCell = document.createElement('td');

      const img = document.createElement('img');
      img.src = item.img;
      imgCell.appendChild(img);

      const name = document.createElement('p');
      name.textContent = item.name;
      nameCell.appendChild(name);

      const price = document.createElement('p');
      price.textContent = item.price;
      priceCell.appendChild(price);

      const decFac = document.createElement('p');
      decFac.textContent = item.decFactor;
      decFacCell.appendChild(decFac);

      const check = document.createElement('input');
      check.type = 'checkbox';
      checkCell.appendChild(check);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decFacCell);
      row.appendChild(checkCell);

      table.appendChild(row);
    }
  }

  function buy(ev) {
    let boxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(x => x.parentElement.parentElement)
    .map(x => ({
      name: x.children[1].textContent,
      price: Number(x.children[2].textContent),
      decFactor: Number(x.children[3].textContent)
    }));

    const names = [];
    let total = 0;
    let decFactor = 0;

    for (const item of boxes) {
      total += item.price;
      decFactor += item.decFactor;
      names.push(item.name);
    }

    const result = `Bought furniture: ${names.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${decFactor / boxes.length}`;
  
    output.value = result;
  }
}