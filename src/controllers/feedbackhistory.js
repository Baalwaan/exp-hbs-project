const getHistory = require("../model/queries/gethistory");

const feedbackHistory = (req, res) => {
  const reviewerName = req.params.reviewerName;
  getHistory(reviewerName).then(response => {
    // console.log(response);
    res.render("feedbackhistory", { arr: response, name: reviewerName });
  });
};

module.exports = feedbackHistory;
