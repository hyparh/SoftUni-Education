const cubes = [];

exports.getAll = () => cubes.slice(); //creates shallow copy of the array

exports.create = (cubeData) => {
    const newCube = {
        id: cubes.length + 1,
        ...cubeData
    };

    cubes.push(newCube);

    return newCube;
};