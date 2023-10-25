const Electronics = require("../models/Electronics");

exports.getAll = () => Electronics.find().populate("owner");

exports.getOne = (electronicsId) => Electronics.findById(electronicsId).populate("owner");

exports.create = (electronicsData) => Electronics.create(electronicsData);

exports.edit = (electronicsId, electronicsData) => Electronics.findByIdAndUpdate(electronicsId, electronicsData, { runValidators: true });

exports.delete = (electronicsId) => Electronics.findByIdAndDelete(electronicsId);

exports.buyElectronics= async (electronicsId, userId, isBought) => {
    return Electronics.findByIdAndUpdate(electronicsId, { $push: { buyingList: userId } }, isBought);
  };