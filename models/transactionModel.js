const mongoose = require("mongoose");
//Schema design for transactions of money
const transcationSchema = new mongoose.Schema(
  {
    userid:{
      type:String,
      required:true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    category: {
      type: String,
      required: [true, "cat is required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "desc is necessary"],
    },
    date: {
      type: Date,
      required: [true],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transaction", transcationSchema);
module.exports = transactionModel;
