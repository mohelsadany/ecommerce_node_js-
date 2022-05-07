const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();
const url = process.env.DATABASE_URL;

//  concat with database
mongoose
  .connect(url)
  .then((conn) => {
    console.log(`database connected: ${conn.connection.host}`);
  })
  .catch((err) => {
    console.error(`database error: ${err}`);
    process.exit(1);
  });

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`mode:  ${process.env.NODE_ENV}`);
}

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`App run ${port}!`));
