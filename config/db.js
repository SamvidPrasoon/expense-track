const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/expensetracker';
mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology:true,useCreateIndex : true,useFindAndModify: false});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Database connected:', url);
});

db.on('error', (err) => {
  console.error('connection error:', err);
});
