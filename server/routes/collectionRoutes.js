const express = require("express");
const collectionRouter = express.Router();
const getCollection = require("../controllers/collectionController");

collectionRouter.get("/collection", getCollection);

module.exports = collectionRouter;
