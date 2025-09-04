import mongoose from "mongoose";

const stockSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },        
    sector: { type: String, required: true },        
    purchasePrice: { type: Number, required: true },
    quantity: { type: Number, required: true },    
    investment: { type: Number, required: true },  
    exchange: { type: String, required: true }
  },
  { timestamps: true }
);

export const Stock = mongoose.model("Stock", stockSchema);
