const express = require("express");
const path = require("path");

const router = express.Router();

const home = require("./home");
const feedback = require("./feedback");
const feedbackHistory = require("./feedbackhistory");
// const deleteFeedback = require("./deletefeedback.js");
const error = require("./error.js");

router.get("/", home);
router.get("/feedbackhistory/:name", feedbackHistory);
// router.get("/delete/:id", deleteFeedback);
router.post("/feedback", feedback);

module.exports = router;
