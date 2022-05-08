const express = require('express');
const morgan = require('morgan');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const dbConnection = require('./config/database');
const categoryRoute = require('./routes/categoryRoute');

// Connect database
dbConnection();

// Express
const app = express();

// Middleware
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`mode:  ${process.env.NODE_ENV}`);
}

// Mount Routes
app.use('/api/v1/categories ', categoryRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`App run ${port}!`));
