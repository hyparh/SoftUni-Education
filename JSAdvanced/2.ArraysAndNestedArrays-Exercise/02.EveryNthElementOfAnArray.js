function everyNthElementOfArray(arr, step) {
    // for i+=step

    return arr.filter((element, index) => index % step == 0);
}

everyNthElementOfArray(['5', '20', '31', '4', '20'], 2);
everyNthElementOfArray(['dsa', 'asd', 'test', 'tset'], 2);
everyNthElementOfArray(['1', '2', '3', '4', '5'], 6);