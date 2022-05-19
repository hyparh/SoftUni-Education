function cookingByNumbers(number, op1, op2, op3, op4, op5) {
    let parsed = Number(number);

    if (op1 === 'chop') {
        parsed /= 2;
    }
    else if (op1 === 'dice') {
        parsed = Math.sqrt(parsed);
    }
    else if (op1 === 'spice') {
        parsed += 1;
    }
    else if (op1 === 'bake') {
        parsed *= 3;
    }
    else if (op1 === 'fillet') {
        parsed *= 0.8;
    }

    parsed = Math.round( parsed * 10 ) / 10;

    console.log(parsed);

    if (op2 === 'chop') {
        parsed /= 2;
    }
    else if (op2 === 'dice') {
        parsed = Math.sqrt(parsed);
    }
    else if (op2 === 'spice') {
        parsed += 1;
    }
    else if (op2 === 'bake') {
        parsed *= 3;
    }
    else if (op2 === 'fillet') {
        parsed *= 0.8;
    }

    parsed = Math.round( parsed * 10 ) / 10;

    console.log(parsed);

    if (op3 === 'chop') {
        parsed /= 2;
    }
    else if (op3 === 'dice') {
        parsed = Math.sqrt(parsed);
    }
    else if (op3 === 'spice') {
        parsed += 1;
    }
    else if (op3 === 'bake') {
        parsed *= 3;
    }
    else if (op3 === 'fillet') {
        parsed *= 0.8;
    }

    parsed = Math.round( parsed * 10 ) / 10;

    console.log(parsed);

    if (op4 === 'chop') {
        parsed /= 2;
    }
    else if (op4 === 'dice') {
        parsed = Math.sqrt(parsed);
    }
    else if (op4 === 'spice') {
        parsed += 1;
    }
    else if (op4 === 'bake') {
        parsed *= 3;
    }
    else if (op4 === 'fillet') {
        parsed *= 0.8;
    }

    parsed = Math.round( parsed * 10 ) / 10;

    console.log(parsed);

    if (op5 === 'chop') {
        parsed /= 2;
    }
    else if (op5 === 'dice') {
        parsed = Math.sqrt(parsed);
    }
    else if (op5 === 'spice') {
        parsed += 1;
    }
    else if (op5 === 'bake') {
        parsed *= 3;
    }
    else if (op5 === 'fillet') {
        parsed *= 0.8;
    }

    parsed = Math.round( parsed * 10 ) / 10;

    console.log(parsed);
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');