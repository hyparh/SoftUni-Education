function solve() {
    let params = Array.from(arguments);

    let types = {};

    for (let arg of params) {
        let type = typeof arg;
        console.log(`${typeof arg}: ${arg}`);

        if (types[type] == undefined) {
            types[type] = 0;
        }        
        types[type]++;
    }

    let result = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (let [type, count] of result) {
        console.log(`${type} = ${count}`);
    }
}

solve(1, 2, 3);
solve('a', 'b', 'c', 'd', 'e');

