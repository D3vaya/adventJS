// coins[0] = 1 céntimo
// coins[1] = 2 céntimos
// coins[2] = 5 céntimos
// coins[3] = 10 céntimos
// coins[4] = 20 céntimos
// coins[5] = 50 céntimos

export const getCoins = (change: number): number[] => {
  if (typeof change !== "number") throw "parameter is not a number";
  const coins = [50, 20, 10, 5, 2, 1];
  const result = [0, 0, 0, 0, 0, 0];
  coins.map((coin, i) => {
    while (change - coin >= 0) {
      change -= coin;
      result[i] += 1;
    }
  });
  return result.reverse();
};

