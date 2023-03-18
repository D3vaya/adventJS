export const wrapGifts = (gifts: string[]) => {
  if (!Array.isArray(gifts)) throw "parameter is not a array";
  if (gifts.length === 0) return [];

  if (gifts.length > 1 && gifts[0].length !== gifts[1].length)
    throw "La longitud de las posiciones del arreglo no es la misma";

  let result: string[] = [];
  let lengthMaxEmoji = Math.min(...gifts.map((emoji) => lengthEmoji(emoji)));

  gifts.forEach((g, i) => {
    if (i === 0) result.push("*".repeat(lengthMaxEmoji * 2 + 2));
    result.push(`*${g}*`);
    if (i === gifts.length - 1) result.push("*".repeat(lengthMaxEmoji * 2 + 2));
  });

  return result;
};

const lengthEmoji = (emoji: string) => {
  let count = 0;

  for (let char of emoji) {
    count++;
    console.log(char);
  }
  return count;
};

// `/* Resultado:
// [ '****',
//   '*📷*',
//   '*⚽️*',
//   '****'
// ]
// */`

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
// console.log(wrapGifts(["📷"]));
console.log(wrapGifts(["📷", "⚽️"]));

//['📷', '⚽️'] sería así ['****', '*📷*', '*⚽️*', '****']
//['🏈🎸', '🎮🧸'] no lo estás envolviendo bien...
