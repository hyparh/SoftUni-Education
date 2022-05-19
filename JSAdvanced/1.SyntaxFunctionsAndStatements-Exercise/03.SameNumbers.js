function sameNumbers(input) {
    let str = input.toString();
    let boolFlag = false;

    let temp = 0;
    let tempNext = 0;
    let sum = 0;
   
    while (input) {
        sum += input % 10;
        input = Math.floor(input / 10);
    }

    for (let i = 0; i < str.length - 1; i++) {
        temp = Number(str[i]);
        tempNext = Number(str[i + 1]);

        if (temp !== tempNext) {

            boolFlag = true;
            break;
        }        
    }

    if (boolFlag === false) {
        console.log(`true`);
        console.log(sum);
    }
    else {
        console.log(`false`);
        console.log(sum);
    }
}

sameNumbers(2222222);
sameNumbers(1234);
