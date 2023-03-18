export const missingReindeer = (ids: number[]) => {
  if (!Array.isArray(ids)) throw "parameter is not a array";
  const minValue = Math.min(...ids);
  const maxValue = Math.max(...ids);

  if (minValue < 0 || maxValue > 100) throw "parameters is not in range";
  if (new Set(ids).size !== ids.length) throw "length not equals";

  for (let i = minValue; i <= maxValue; i++) {
    if (!ids.includes(i)) return i;
    else if (maxValue === 1 && ids.length === 1) return 0;
  }

  return maxValue + 1;
};

// console.log(missingReindeer([0, 2, 3]))
// console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0]))
// console.log(missingReindeer([0, 1]))
// console.log(missingReindeer([3, 0, 1]))
// console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]))
// console.log(missingReindeer([0]))
console.log(missingReindeer([1]));
console.log(missingReindeer([0, 1]));
