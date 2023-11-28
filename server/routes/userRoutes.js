const express = require("express");
const userRouter = express.Router();
const {
  verifyUser,
  loginUser,
  signupUser,
  addOrRemove,
} = require("../controllers/userController");

userRouter.post("/", verifyUser);

userRouter.post("/login", loginUser);

userRouter.post("/signup", signupUser);

userRouter.post("/addOrRemove/:id", addOrRemove);

module.exports = userRouter;
