const Cube = require('../models/Cube');

//creates shallow copy of the array
exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean();
    
    // TODO: Use mongoose to filter in the db
    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
};

//here we take one cube on its Id
exports.getOne = (cubeId) => Cube.findById(cubeId);

//here we take one cube on its Id and populate it with its accessories
exports.getOneWithAccessories = (cubeId) => this.getOne(cubeId).populate('accessories');

exports.create = (cubeData) => {
    const cube = new Cube(cubeData);

    return cube.save();
};

exports.attachAccessory = (cubeId, accessory) => {
    // First variant (harder)
    return Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessory } }); // accessory here is the Id of an accessory

    //Second variant (easier)
    // const cube = cube.findById(cubeId);
    // cube.accessories.push(accessory);

    // return cube.save();
};