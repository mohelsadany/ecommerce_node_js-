const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: 'config.env' });

//  Concat with database
mongoose
  .connect(process.env.DATABASE_URL)
  .then((conn) => {
    console.log(`database connected: ${conn.connection.host}`);
  })
  .catch((err) => {
    console.error(`database error: ${err}`);
    process.exit(1);
  });

// Express
const app = express();

// Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`mode:  ${process.env.NODE_ENV}`);
}

// Schema
// 1- create schema
const categorySchema = new mongoose.Schema({
  name: String,
});

// 2- create model
const CategoryModel = mongoose.model('Category', categorySchema);

// Routes
app.post('/', (req, res) => {
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
});
app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App run ${port}!`));
