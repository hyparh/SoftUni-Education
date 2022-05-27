function heroicInventory(arr) {
    let result = [];

    for (const iterator of arr) {
        let [name, level, items] = iterator.split(' / ');  

        level = Number(level);
        items = items ? items.split(', ') : []; // if there are items split them, else make empty array

        result.push({name, level, items});        
    }    

    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);