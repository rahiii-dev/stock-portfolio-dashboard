import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { getEnv } from "./utils/env.js";

const app = express();
const PORT = getEnv("PORT", 800);

// Middleware
app.use(cors());
app.use(express.json());

// Routes

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
  });
})
