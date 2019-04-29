const db = require("../db_connection");

const postQuery = (name, gym, duration, exercise) => {
  return db
    .query(
      "INSERT INTO gym (name, gym_name, workout_duration, favourite_workout) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, gym, duration, exercise]
    )
    .then(response => response.rows);
};

module.exports = postQuery;
