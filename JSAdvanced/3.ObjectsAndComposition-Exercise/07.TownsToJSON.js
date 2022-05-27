function townsToJson(arr) {
    let result = [];

    class Town {
        constructor(name, latitude, longitude) {
            this.Town = name,
            this.Latitude = Number(latitude),
            this.Longitude = Number(longitude)
        }
    }

    for (let index = 1; index < arr.length; index++) {  
        let array = arr[index].split('|').map(t => t.trim()).filter(x => x.length != 0); // removing white spaces

        let townName = array[0];
        let latitude = Number(array[1]).toFixed(2);
        let longitude = Number(array[2]).toFixed(2);

        let town = new Town(townName, latitude, longitude);

        result.push(town);
    }

    return JSON.stringify(result);
}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);