function evenPositionElement(input) {
    let arrResult = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            arrResult.push(input[i]);
        }        
    }

    console.log(arrResult.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);