export const sumPairs = (numbers: number[], result: number | null) => {

  if (!numbers || !result) throw "undefined params";
  if (!Array.isArray(numbers)) throw "error params";
  if (numbers.length === 0) return null;

  let response: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === result) {
        response.push(numbers[i]);
        response.push(numbers[j]);
        return response;
      }
    }
  }

  return null;
};

// console.log({ expect: [3, 7], result: sumPairs([3, 5, 7, 2], 10) });
// console.log({ expect: null, result: sumPairs([-3, -2, 7, -5], 10) });
// console.log({ expect: [2, 2], result: sumPairs([2, 2, 3, 1], 4) });
// console.log({ expect: [6, 2], result: sumPairs([6, 7, 1, 2], 8) });
// console.log({ expect: [1, 5], result: sumPairs([0, 2, 2, 3, -1, 1, 5], 6) });
