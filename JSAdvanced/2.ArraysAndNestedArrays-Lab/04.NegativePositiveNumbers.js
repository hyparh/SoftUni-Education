function negativePositiveNumbers(input) {
    let result = [];

    for (let index = 0; index < input.length; index++) {
        if (input[index] < 0) {
            result.unshift(input[index]);
        }
        else {
            result.push(input[index]);
        }    
    }

    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);