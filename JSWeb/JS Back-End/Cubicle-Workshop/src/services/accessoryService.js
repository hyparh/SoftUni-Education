const Accessory = require("../models/Accessory");

exports.getAll = () => Accessory.find();

exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getOthers = (accessoryIds) => Accessory.find({ _id: { $nin: accessoryIds } }); //$nin is NOT IN (mongoDb query)