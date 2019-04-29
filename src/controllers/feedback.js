const feedback = (req, res) => {
  console.log("This is the >>>>", req.body["fav-exercise"]);
  res.render("feedback", {
    name: req.body.name,
    gym: req.body.gym,
    duration: req.body.duration,
    "fav-exercise": req.body["fav-exercise"]
  });
};

module.exports = feedback;
