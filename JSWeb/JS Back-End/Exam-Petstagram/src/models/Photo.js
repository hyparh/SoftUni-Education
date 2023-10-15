const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [2, "Name should be at least 2 characters long"]
  },
  image: {
    type: String,
    required: [true, "ImageUrl is required"],
    match: {
      regex: /^https?:\/\//,
      message: "Invalid URL"
    }
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [1, "Age should be at least 1"],
    max: [100, "Age cannot be more than 100"]
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [5, "Description should contain at least 5 characters long"],
    maxLength: [50, "Description cannot contain more than 50 characters long"]
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    minLength: [5, "Location should contain at least 5 characters long"],
    maxLength: [50, "Location cannot contain more than 50 characters long"]
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      user: {      //instead of relation we can just take the username here
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
      message: {
        type: String,
        required: [true, "Comment message is required"],
      },
    }
  ]
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
