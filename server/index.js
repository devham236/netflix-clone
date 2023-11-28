const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const server = express();
const userRouter = require("./routes/userRoutes");
const collectionRouter = require("./routes/collectionRoutes");

server.use(express.json());
server.use(cors());

server.use("/api/v1/collections", collectionRouter);
server.use("/api/v1/user", userRouter);

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`Server is listening and is connected to database`);
    });
  })
  .catch((error) => console.log(error));
