const uniqid = require('uniqid');
//we fill the array here with hardcoded cubes just for easy testing and not creating new every time (since we don't have db yet)
const cubes = [
    {
        id: '1458s8lmve9ys2',
        name: 'Mirror cube',
        description: 'A cool mirror cube',
        imageUrl: 'https://m.media-amazon.com/images/I/71qYx+i+W+L._AC_SY300_SX300_.jpg',
        difficultyLevel: 4
    },
    {
        id: '1158a8ltve9ys2',
        name: 'Rubik classic',
        description: 'Evergreen',
        imageUrl: 'https://cdn.shoplightspeed.com/shops/636231/files/35106155/1652x1652x2/winning-moves-rubiks-cube-3x3.jpg',
        difficultyLevel: 3
    }
];

exports.getAll = () => cubes.slice(); //creates shallow copy of the array
exports.getOne = (cubeId) => cubes.find(x => x.id === cubeId); //we take one cube on its Id

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData
    };

    cubes.push(newCube);

    return newCube;
};