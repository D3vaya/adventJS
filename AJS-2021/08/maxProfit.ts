export const maxProfit = (prices: number[]) => {
  if (!prices) throw "undefined parameters";
  if (!Array.isArray(prices)) throw "parameter is not a array";

  const halfPrices = Math.ceil(prices.length / 2);
  const leftHalfPrices = prices.slice(0, halfPrices);
  const rightHalfPrices = prices.slice(halfPrices, prices.length);

  const minValue = Math.min(...leftHalfPrices);
  const maxValue = Math.max(...rightHalfPrices);

  if (minValue >= maxValue) return -1;
  return maxValue - minValue;
};

console.log({ expectd: 16, result: maxProfit([39, 18, 29, 25, 34, 32, 5]) });
console.log({ expectd: 60, result: maxProfit([10, 20, 30, 40, 50, 60, 70]) });

// console.log({expectd: -1, result: maxProfit([18, 15, 12, 11, 9, 7])})
// console.log({expectd: -1, result: maxProfit([3, 3, 3, 3, 3])})
