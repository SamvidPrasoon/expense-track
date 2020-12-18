const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');


//all transactions

router.get('/',async(req,res)=>{
    try {
        const transaction = await Transaction.find();
        return res.status(200).json({
            success:true,
            count:transaction.length,
            data:transaction
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:'server error'
        })
    }
})
//add transactions
 router.post('/',async(req,res)=>{
     try {
         const transaction = await Transaction.create(req.body)
         res.status(200).json({
             success:true,
             data:transaction
         })
     } catch (error) {
          res.status(400).json({
              success:false,
              msg:'transaction not created'
          }) 
     }
 })


//delete transactions
router.delete('/:id',async(req,res)=>{
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if(!transaction){
            return res.status(404).json({
                success:false,
                error:'no transaction found'
            })
        }
        res.status(200).json({
            success:true,
            data:{},
            msg:'transaction deleted'
        })
    } catch (error) {
        res.status(200).json({
            success:false,
            msg:'server error'
        })
    }
})



module.exports  = router;
