function carFactory(obj) {
    let power = obj.power;
    let volume = 0;

    if (power <= 90) {
        power = 90;
        volume = 1800;
    } else if (power <= 120) {
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    };

    let wheels = obj.wheelsize % 2 === 0 ? obj.wheelsize - 1 : obj.wheelsize;

    let result = {
        model: obj.model,
        engine: {
            power: power,
            volume: volume,
        },
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: new Array(4).fill(wheels, 0, 4)
    };

    return result;
}