const getHistory = require("../model/queries/gethistory");

const feedbackHistory = (req, res) => {
  const name = req.params.name;
  getHistory(name).then(response => {
    res.render("history", { arr: response, name: name });
  });
};

module.exports = feedbackHistory;
