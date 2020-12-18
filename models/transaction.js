const mongoose = require('mongoose');
const TransactionSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});
module.exports = mongoose.model('Transaction',TransactionSchema);