function start(arr) {
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

    //console.log(res);

    return res;
}

start([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
start([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);