export function randomWithVariation(base: number, variationPercent: number): number {
  // variationPercent = 0.01 means ±1%
  const change = (Math.random() * 2 - 1) * variationPercent;
  return +(base * (1 + change)).toFixed(2);
}