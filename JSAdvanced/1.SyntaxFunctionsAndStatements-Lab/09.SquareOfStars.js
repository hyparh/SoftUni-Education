function squareOfStars(input) {
    if (input === null) {
        input = 5;
    }

    let array = [];

    for (let i = 0; i < input; i++) {
        for(let i = 0; i < input; i++) {
            array.push('*');
        }
    
        console.log(array.join(' '));

        array = [];
    }    
}

squareOfStars(null);
squareOfStars(2);