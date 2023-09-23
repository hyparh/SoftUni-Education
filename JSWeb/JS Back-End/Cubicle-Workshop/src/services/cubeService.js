const uniqid = require('uniqid');
const cubes = [];

exports.getAll = () => cubes.slice(); //creates shallow copy of the array

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData
    };

    cubes.push(newCube);

    return newCube;
};