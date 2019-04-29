const db = require("../db_connection");

const feedbackHistory = name => {
  return db
    .query("SELECT * FROM gym WHERE UPPER (name) = $1", [name.toUpperCase()])
    .then(response => response.rows);
};

module.exports = feedbackHistory;
