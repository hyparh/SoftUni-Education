function circleArea(input) {

    let parsed = typeof(input);

    if (parsed === 'number') {
        let area = input ** 2 * Math.PI;
        
        console.log(area.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${parsed}.`);
    }    
}

circleArea(5);
circleArea('name');