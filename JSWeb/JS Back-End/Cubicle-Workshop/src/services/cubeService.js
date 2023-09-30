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

exports.getOne = (cubeId) => Cube.findById(cubeId); //we take one cube on its Id

exports.create = async (cubeData) => {
    const cube = new Cube(cubeData);

    await cube.save();

    return cube;
};