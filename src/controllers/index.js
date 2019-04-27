const express = require("express");
const path = require("path");

const router = express.Router();

const home = require("./home");
const error = require("./error.js");

router.get("/", home);

module.exports = router;
