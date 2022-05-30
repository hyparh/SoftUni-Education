function som() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;

    let sum = Number(num1) + Number(num2) + Number(num3);

    document.getElementById('sum').value = sum;

    
}

function takingElements() {
    let pElements = document.getElementsByTagName('div')[0].children;

    document.getElementByTagName('div')[0].children = pElements;
}