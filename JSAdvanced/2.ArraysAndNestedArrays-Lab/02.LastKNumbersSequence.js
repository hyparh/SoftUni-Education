function lastKNumberSequence(strLength, step) {
    let arr = [];
    arr.push(1);

    for (let i = 0; i < strLength; i++) {
        for (let j = arr[i]; j < step; j++) {
            if (arr[i - step] > 0) {
                
            }
        }
    }
}

lastKNumberSequence(6, 3);
lastKNumberSequence(8, 2);