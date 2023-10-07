const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory' //this name comes from Accessory.js where it is used too
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;