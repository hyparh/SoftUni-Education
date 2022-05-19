function wordsUppercase(input) {
    let regexWords = /(\w+)/g;
    let regexMatches = input.match(regexWords);
    let arr = [];

    for (let i = 0; i < regexMatches.length; i++) {
        arr.push(regexMatches[i].toUpperCase());
    }

    console.log(arr.join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');