const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const genToken = require("../utils/genToken");

const verifyUser = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
      if (err) throw err;
      const matchingUser = await UserModel.findOne({ _id: data.id });
      return res.status(201).json({ ...matchingUser });
    });
  } else {
    res.status(401).json({ message: "No token provided." });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = genToken(user._id);
    res.status(200).json({
      email: user.email,
      id: user._id,
      token,
      userArray: user.userArray,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await UserModel.signup(email, password);
    const token = genToken(newUser._id);
    res.status(200).json({
      email: newUser.email,
      id: newUser._id,
      token,
      userArray: newUser.userArray,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addOrRemove = async (req, res) => {
  const { item, method } = req.body;
  const { id } = req.params;

  if (id) {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { [method]: { userArray: item } },
      { new: true }
    );

    return res.status(200).json({ ...updatedUser });
  } else {
    res.status(400).json({ message: "Not authorized" });
  }
};

module.exports = { verifyUser, loginUser, signupUser, addOrRemove };
