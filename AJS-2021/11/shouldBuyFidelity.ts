// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) =
// 270,8125$

export const shouldBuyFidelity = (times: number) => {
  if (typeof times !== "number") throw "error parameter";
  const ticketValue = 12 * times;
  const discountPerntage = 0.75
  
  let fidelityCostCardValue = 250;

  for (let i = 1; i <= times; i++) {
    fidelityCostCardValue += 12 * (discountPerntage ** i);
  }
  return ticketValue > fidelityCostCardValue;
};

