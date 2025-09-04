import { Stock } from "../../../models/Stock.js";

export function generateMockStock(name, sector, exchange, purchasePrice, quantity) {
  const investment = +(purchasePrice * quantity).toFixed(2);

  return new Stock({
    name,
    sector,
    exchange,
    purchasePrice,
    quantity,
    investment
  });
}