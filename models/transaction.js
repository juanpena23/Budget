// import { Mongoose } from "mongoose";

// import { Schema as _Schema, model } from "mongoose";
const mongoose= require('mongoose')
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
// const Transaction = model("Transaction", transactionSchema);

// export default Transaction;
module.exports=Transaction