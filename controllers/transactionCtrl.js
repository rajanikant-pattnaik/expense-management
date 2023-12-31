const transactionModel = require('../models/transactionModel');
const moment=require('moment')
// const trasactionModel=require('../models/transactionModel')
const getAllTransaction=async(req,res)=>{
    try {
    const {frequency}=req.body
    const transaction=await transactionModel.find({
        date:{
            $gt:moment().subtract(Number(frequency),'d').toDate(),
        },
        userid:req.body.userid,});
    res.status(200).json(transaction);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
const addTransaction=async(req,res)=>{
 try {
    const newTransaction=new transactionModel(req.body);
    await newTransaction.save();
    res.status(201).send('transaction created');
 } catch (error) {
    console.log(error);
    res.status(500).json(error);
 }
}

module.exports={getAllTransaction,addTransaction};