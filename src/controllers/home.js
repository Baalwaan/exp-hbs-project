const home = (req, res) => {
  console.log("hi");
  res.render("home", { home: true });
  res.status(200);
};

module.exports = home;
