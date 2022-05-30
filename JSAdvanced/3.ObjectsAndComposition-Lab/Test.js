function splitted(input, command) {
    input = input.toLowerCase();
    let splitted = input.split(' ');
    let result = [];
    let word = '';

    if (command === 'Camel Case') {
        for (let i = 0; i < splitted.length; i++) {

            if (i != 0) {
                word = splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1);
            }
            else {
                word = splitted[i];
            }
            
            result.push(word);
        }

        console.log(result.join(''));
    }
    else if (command === 'Pascal Case') {
        for (let j = 0; j < splitted.length; j++) {

            word = splitted[j].charAt(0).toUpperCase() + splitted[j].slice(1);            
            result.push(word);
        }

        console.log(result.join(''));
    }
    else {
        console.log('Error!');
    }
}

splitted('Lazy Brown FOX', 'Camel Case');
splitted('Lazy Brown FOX', 'Pascal Case');
splitted('Lazy Brown FOX', 'Nasty Case');