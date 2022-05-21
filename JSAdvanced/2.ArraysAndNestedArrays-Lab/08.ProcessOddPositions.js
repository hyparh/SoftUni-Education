function processOddPositions(arr) {
    const arrResult = [];

    for (let i = 0; i < arr.length; i++) {        
        if (i % 2 !== 0) {
            arrResult.push(arr[i] * 2);
        }
    }

    console.log(arrResult.reverse().join(' '));
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);