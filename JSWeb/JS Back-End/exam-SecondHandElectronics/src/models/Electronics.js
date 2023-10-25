const mongoose = require("mongoose");

const electronicsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [10, "Name should be at least 10 characters long"],
  },
  type: {
    type: String,
    required: true,
    minLength: [2, "Type should be at least 2 characters long"],
  },
  damage: {
    type: String,
    required: true,
    minLength: [10, "Damage should be at least 10 characters long"],
  },
  image: {
    type: String,
    required: true,
    match: [/^https?:\/\//, "Invalid URL"],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "Description should contain at least 10 characters"],
    maxLength: [200, "Description cannot contain more than 200 characters"],
  },
  production: {
    type: Number,
    required: true,
    min: [1900, "Production cannot be earlier than year of 1900"],
    max: [2023, "Production cannot be later than year of 2023"],
  },
  exploitation: {
    type: Number,
    required: true,
    validate: {
        validator: function (value) {
          return value > 0;
        },
        message: "A positive number is required for the field exploitation",
      },
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value > 0;
      },
      message: "A positive number is required for the field price",
    },
  },
  buyingList: [{
    type: mongoose.Types.ObjectId,
    ref: 'User',
  }],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Electronics = mongoose.model("Electronics", electronicsSchema);

module.exports = Electronics;
