const mongoose = require('mongoose'); //import mongoose from 'mongoose';  //get all categories from the database    //get all categories from the database    
exports.getAllCategories = (req, res) => {
  // 1-create schema
  const categorySchema = new mongoose.Schema(
    {
    name: {
      type: String, 
      required: [true, 'category is required'],
      unique: [true, 'category is already exist'],
      minlength: [3, 'category must be at least 3 characters long'],
      maxlength: [32, 'category must be less than 32 characters long']

    },
    // A and B ==>shopping .com / a-and-b.com
    slug: {
      type: String,
      lowercase: true,
     }, 
    },
     {timestamps: true}
       );
  }


// 2- create model  //create model
const CategoryModel = mongoose.model('Category', categorySchema);
export default CategoryModel;
