const mongoose = require('mongoose');

// 1- create schema
const categorySchema = new mongoose.Schema({
  name: String,
});

// 2- create model
const CategoryModel = mongoose.model('Category', categorySchema);

//create a new category in the database
exports.createCategory = (req, res) => {
  const name = req.body.name;
  const newCategory = new CategoryModel({ name: name });
  newCategory
    .save() 
    .then((doc) => {      
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
};  //end of createCategory


module.exports = CategoryModel;
