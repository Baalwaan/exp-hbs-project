const deleteQuery = require('../model/queries/deletefeedback');

const deleteFeedback = (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  console.log('this is id ', id);

  deleteQuery(id).then(response => {
    console.log('this is >>>>>', response);
    res.render('deletefeedback', { id: id });
  });
};

module.exports = deleteFeedback;
