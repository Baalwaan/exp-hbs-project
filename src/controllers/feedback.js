const postQuery = require("../model/queries/postquery");

const feedback = (req, res) => {
  const { name, gym, duration, exercise } = req.body;
  postQuery(name, gym, duration, exercise).then(response => {
    res.render("feedback", {
      id: response[0].id,
      name: response[0].name,
      gym: response[0].gym_name,
      duration: response[0].workout_duration,
      exercise: response[0].favourite_workout
    });
  });
};

module.exports = feedback;
