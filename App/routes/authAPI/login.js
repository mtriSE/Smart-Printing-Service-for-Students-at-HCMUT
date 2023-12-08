const express = require("express");
const route = express.Router();

const user = require("../../config/db.config.js");
const authController = require("../../controllers/auth.controller.js");

// route.post("/login", authController.signin);

route.post("/login", authController.signin);
route.post("/logout", authController.logout);

module.exports = route;
