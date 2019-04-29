const home = (req, res) => {
  console.log("hi");
  res.render("home");
  res.status(200);
};

module.exports = home;
