import { connectDB } from "../../../config/db.js";
import { Stock } from "../../../models/Stock.js";
import { generateMockStock } from "../factory/stockFactory.js";

export async function seedStocks() {
  await connectDB();

  await Stock.deleteMany({});
  console.log("Existing stocks cleared.");

  const mockStocks = [
    // Financial Sector
    generateMockStock("HDFC Bank", "Financial", "HDFCBANK", 1490, 50),
    generateMockStock("Bajaj Finance", "Financial", "BAJFINANCE", 6466, 15),
    generateMockStock("ICICI Bank", "Financial", "532174", 780, 84),
    generateMockStock("Bajaj Housing", "Financial", "544252", 130, 504),
    generateMockStock("Savani Financials", "Financial", "511577", 24, 1080),

    // Tech Sector
    generateMockStock("Affle India", "Technology", "AFFLE", 1151, 50),
    generateMockStock("LTI Mindtree", "Technology", "LTIM", 4775, 16),
    generateMockStock("KPIT Tech", "Technology", "542651", 672, 61),
    generateMockStock("Tata Tech", "Technology", "544028", 1072, 63),
    generateMockStock("BLS E-Services", "Technology", "544107", 232, 191),

    // Consumer Goods
    generateMockStock("Dmart", "Consumer Goods", "DMART", 3777, 27),
    generateMockStock("Tata Consumer", "Consumer Goods", "532540", 845, 90),
    generateMockStock("Pidilite", "Consumer Goods", "500331", 2376, 36),

    // POWER Sector
    generateMockStock("Tata Power", "Power", "500400", 224, 225),
    generateMockStock("KPI Green", "Power", "542323", 875, 50),
    generateMockStock("Suzlon", "Power", "532667", 44, 450),
    generateMockStock("Gensol", "Power", "542851", 998, 45),

    // Pipe Sector
    generateMockStock("Hariom Pipes", "Pipe", "543517", 580, 60),
    generateMockStock("Astral", "Pipe", "ASTRAL", 1517, 56),
    generateMockStock("Polycab", "Pipe", "542652", 2818, 28),
    
    // Other Sector
    generateMockStock("Clean Science", "Other", "543318", 1610, 32),
    generateMockStock("Deepak Nitrite", "Other", "506401", 2248, 27),
    generateMockStock("Fine Organic", "Other", "541557", 4284, 16),
    generateMockStock("Gravita", "Other", "533282", 2037, 8),
  ];

  await Stock.insertMany(mockStocks);
  console.log("Stocks inserted!");
}
