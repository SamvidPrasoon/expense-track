const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'});


const connectdb = require('./config/db');
const app = express();
app.use(express.json());

const transactions = require('./routes/transaction');
app.use('/api/transaction',transactions);

const PORT = process.env.PORT || 5000;


const server = app.listen(PORT, console.log('server running on port 5000'));
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
   server.close(() => process.exit(1));
});