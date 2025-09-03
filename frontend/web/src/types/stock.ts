export interface Stock {
  name: string;
  sector: string;
  exchange: string;
  purchasePrice: number;
  quantity: number;
  investment: number;
  portfolioPercentage: number;
  cmp: number;
  presentValue: number;
  gainLoss: number;
  peRatio: number;
  latestEarnings: number;
}