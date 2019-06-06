const db = require('../db_connection');

const deleteFeedback = idNumber => {
  return db
    .query('DELETE FROM gym WHERE id=$1', [idNumber])
    .then(() => true)
    .catch((err = console.log('Error: ', err)));
};

module.exports = deleteFeedback;
