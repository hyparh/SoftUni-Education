function everyNthElementOfArray(arr, step) {
    let result = [];

    for (let i = 0; i <= arr.length - 1; i+=step) {

        if (i === 0) {
            result.push(arr[i]);
            continue;
        }

        result.push(arr[i]);
    }

    return result;

    // short solution
    // return arr.filter((element, index) => index % step == 0);
}

everyNthElementOfArray(['5', '20', '31', '4', '20'], 2);
everyNthElementOfArray(['dsa', 'asd', 'test', 'tset'], 2);
everyNthElementOfArray(['1', '2', '3', '4', '5'], 6);