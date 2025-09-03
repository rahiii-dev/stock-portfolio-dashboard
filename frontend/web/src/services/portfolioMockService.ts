import type { Stock } from "@/types/stock";
import { generateMockStock } from "@/utils/mockData";
import { randomWithVariation } from "@/utils/random";

const mockStocks: Stock[] = [
  // Financial Sector
  generateMockStock('HDFC BANK', 'Financial', 'HDFCBANK', 1490, 50),
  generateMockStock('Bajaj Finance', 'Financial', 'BAJFINANCE', 6466, 15),
  generateMockStock('ICICI Bank', 'Financial', '532174', 780, 84),

  // Technology Sector
  generateMockStock('Affle India', 'Technology', 'AFFLE', 1151, 50),
  generateMockStock('LTI Mindtree', 'Technology', 'LTIM', 4775, 16),
  generateMockStock('KPIT Tech', 'Technology', '542651', 672, 61),
  generateMockStock('Tata Tech', 'Technology', '544028', 1072, 63),

  // Consumer Goods
  generateMockStock('Dmart', 'Consumer', 'DMART', 3777, 27),
  generateMockStock('Tata Consumer', 'Consumer', '532540', 845, 90),
  generateMockStock('Pidilite', 'Consumer', '500331', 2376, 36),

  // Other Sector
  generateMockStock('Clean Science', 'Other', '543318', 1610, 32),
  generateMockStock('Deepak Nitrite', 'Other', '506401', 2248, 27),
];


function generateUpdatedStocks(): Stock[] {
  const updated = mockStocks.map(stock => {
    const cmp = randomWithVariation(stock.purchasePrice, 0.01); // ±1%
    const presentValue = +(cmp * stock.quantity).toFixed(2);
    const gainLoss = +(presentValue - stock.investment).toFixed(2);

    return {
      ...stock,
      cmp,
      presentValue,
      gainLoss,
      portfolioPercentage: 0
    };
  });

  const totalValue = updated.reduce((sum, s) => sum + s.presentValue, 0);

  return updated.map(s => ({
    ...s,
    portfolioPercentage: +((s.presentValue / totalValue) * 100).toFixed(2)
  }));
}

export const getPortfolioStocks = async (): Promise<Stock[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (Math.random() < 0.5) {
    throw new Error("Failed to fetch portfolio stocks");
  }
  return generateUpdatedStocks()
};