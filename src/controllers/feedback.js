const feedback = (req, res) => {
  console.log("This is the >>>>", req.body["fav-exercise"]);
  res.end();
};

module.exports = feedback;
