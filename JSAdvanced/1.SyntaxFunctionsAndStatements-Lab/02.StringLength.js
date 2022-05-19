function stringLength(word1, word2, word3) {
    let lengthWord1 = word1.length;
    let lengthWord2 = word2.length;
    let lengthWord3 = word3.length;

    let averageLength = (lengthWord1 + lengthWord2 + lengthWord3) / 3;
    let sumLength = lengthWord1 + lengthWord2 + lengthWord3;

    console.log(sumLength);
    console.log(Math.round(averageLength));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');