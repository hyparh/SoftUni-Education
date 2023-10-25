const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minLength: [2, "Username is too short!"],
    match: [/^[A-Za-z0-9]+$/, "Username must be alphanumeric"], //from the beginning to the end it must contain these symbols
    unique: {
        value: true,
        message: "Username already exists"
    }
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: function (value) {
        return /^[A-Za-z0-9]+$/.test(value);
      },
      message: `Invalid password characters!`,
    },
    minLength: 3,
  },
});

//TODO: make it work
userSchema.path("username").validate(function (value) {
  const user = mongoose.model("User").findOne({ username: value });

  return !!user;
}, "Username already exists");

//password validation
userSchema.virtual("repeatPassword").set(function (value) {
  if (value !== this.password) {
    throw new Error("Password mismatch");
  }
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10); //use 10 rounds for generate unique salt every time

  this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
