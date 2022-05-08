const categoryModel = require('../models/categoryModel');

exports.getCategory = (req, res) => {
  const name = req.body.name;
  console.log('🚀 ~ file: server.js ~ line 40 ~ app.post ~ name', res.name);

  const newCategory = new CategoryModel({ name: name });
  newCategory
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
};
