import type { Stock } from "@/types/stock";

export const generateMockStock = (
  name: string,
  sector: string,
  exchange: string,
  purchasePrice: number,
  quantity: number,
  cmpVariation = 0.1
): Stock => {
  const investment = purchasePrice * quantity;
  const cmpChange = (Math.random() - 0.5) * 2 * cmpVariation; // Random change
  const cmp = purchasePrice * (1 + cmpChange);
  const presentValue = cmp * quantity;
  const gainLoss = presentValue - investment;
  const portfolioPercentage = Math.random() * 15; // Will be recalculated
  
  return {
    name,
    sector,
    exchange,
    purchasePrice: Number(purchasePrice.toFixed(2)),
    quantity,
    investment: Number(investment.toFixed(2)),
    portfolioPercentage: Number(portfolioPercentage.toFixed(2)),
    cmp: Number(cmp.toFixed(2)),
    presentValue: Number(presentValue.toFixed(2)),
    gainLoss: Number(gainLoss.toFixed(2)),
    peRatio: Number((15 + Math.random() * 20).toFixed(2)), // Random P/E between 15-35
    latestEarnings: Number((Math.random() * 10000000).toFixed(2)), // Random earnings
  };
};