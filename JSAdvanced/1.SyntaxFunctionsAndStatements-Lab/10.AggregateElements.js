function aggregateElements(input) {
    let sumResult = 0;
    let inverseValuesResult = 0;
    let concatResult = 0;

    for (let i = 0; i < input.length; i++) {
        sumResult += input[i];
        inverseValuesResult += 1 / input[i];        
    }

    concatResult = input.join('');

    console.log(sumResult);
    console.log(inverseValuesResult);
    console.log(concatResult);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);