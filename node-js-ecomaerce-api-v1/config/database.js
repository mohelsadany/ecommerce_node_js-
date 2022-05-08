const mongoose = require('mongoose');

const dbConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then((conn) => {
      console.log(`database connected: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.error(`database error: ${err}`);
      process.exit(1);
    });
};
module.exports = dbConnection;
