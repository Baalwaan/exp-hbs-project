const express = require("express");
const path = require("path");

const router = express.Router();

const home = require("./home");
const feedback = require("./feedback");
const error = require("./error.js");

router.get("/", home);

router.post("/feedback", feedback);

module.exports = router;
