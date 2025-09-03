import type { Stock } from "./stock";

export interface PortfolioData {
  stocks: Stock[];
  totalValue: number;
  totalGainLoss: number;
  gainLossPercentage: number;
}