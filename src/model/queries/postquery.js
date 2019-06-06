const db = require('../db_connection');

const postQuery = (name, gym, duration, exercise) => {
  return db
    .query(
      'INSERT INTO gym (name, gym_name, workout_duration, favourite_workout, time_stamp) VALUES ($1, $2, $3, $4, now()) RETURNING *',
      [name, gym, duration, exercise]
    )
    .then(response => response.rows)
    .catch(err => console.log('Error: ', err));
};

module.exports = postQuery;
