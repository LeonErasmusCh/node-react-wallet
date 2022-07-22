const express = require('express')
const path = require('path')

const router = express.Router();

// get all transactions
router.get('/transaction', (req, res, next) => {
    //res.send("all transactions !!!!!!")
    res.json({message: "transacetions"})
    console.log("all transaction")
})

// get all transactions limit 10 most recent
router.get('/latest-transactions', (req, res) =>{
    res.json({message: "transacetions limit 10"})
})

// post new transaction
router.post('/register-transactions', (req, res) =>{
    res.json({message: "create transacetion"})
})

//  update a transaction by id
router.post('/update-transaction', (req, res) =>{
    res.json({message: "update transacetion"})
})

// delete transaction by id
router.delete('/delete-transaction', (req, res) =>{
    res.json({message: " delete transacetion"})
})



module.exports = router;