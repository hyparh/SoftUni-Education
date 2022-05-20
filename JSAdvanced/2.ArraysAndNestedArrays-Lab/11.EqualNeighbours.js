function start (arr) {
    let res = 0;

    for (let row = 0; row < arr.length; row++){
        for (let col = 0; col < arr[row].length; col++){

            let el = arr[row][col];
            
            if (row < arr.length - 1 && el === arr[row + 1][col]) {
                res += 1;
            } 
            if ((col < arr[row].length - 1) && (el === arr[row][col + 1])) {
                res += 1;
            }
        }
    }

    return res;
}