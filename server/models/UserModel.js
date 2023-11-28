const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const genHashedPassword = require("../utils/genHashedPassword");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userArray: {
    type: Array,
  },
});

UserSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is invalid.");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password is not strong enough. Your password should have at least 8 characters containing uppercase letters, lowercase letters, a number and a special character."
    );
  }

  const emailExists = await this.findOne({ email });

  if (emailExists) {
    throw Error("Email is already in use.");
  }

  const hashedPassword = await genHashedPassword(password);

  const newUSer = await this.create({ email, password: hashedPassword });

  return newUSer;
};

UserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect Email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
