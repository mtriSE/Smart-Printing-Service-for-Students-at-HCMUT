const express = require("express");
const route = express.Router();

const user = require("../../config/db.config.js");
const authController = require("../../controllers/auth.controller.js");

route.post("/login", authController.signin);

module.exports = route;
