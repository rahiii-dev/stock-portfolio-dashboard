import mongoose from "mongoose";
import { getEnv, getOrThrow } from "../utils/env.js";

export async function connectDB() {
  const MONGO_URI = getOrThrow("MONGO_URI");
  const DB_NAME = getEnv("DB_NAME", "stock_portfolio_app");

  try {
    await mongoose.connect(MONGO_URI, {
      dbName: DB_NAME
    });

    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); 
  }
}
