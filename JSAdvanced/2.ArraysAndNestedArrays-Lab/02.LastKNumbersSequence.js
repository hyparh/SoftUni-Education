function lastKNumberSequence(n, k) {
    let arr = [];
    arr.push(1);

    for (let i = 0; i < n; i++) {
        if (arr[i] - k <= 0) {
            continue;
        }
        else {
            for (let j = arr[i]; j < k; j++) {               
                arr.push();
            }
        }        
    }
}

lastKNumberSequence(6, 3);
lastKNumberSequence(8, 2);