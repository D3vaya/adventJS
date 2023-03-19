export const checkSledJump = (heights: number[]): boolean => {
  if (!heights || !Array.isArray(heights)) throw "undefined params";
  if (heights.length === 0) return false;
  if (heights.length < 3) throw "length array is < 3";
  if (typeof heights[0] !== "number") throw "parameter is not a Array numbers";
  if (heights.reduce((acc, sum) => acc + sum) === 0) return false;

  const midIndex = Math.round(heights.length / 2 - 1);

  for (let index = 0; index < heights.length; index++) {
    if (index < midIndex) {
      if (heights[index] > heights[index + 1]) return false;
    } else {
      if (heights[index] < heights[index + 1]) return false;
    }
  }

  return true;
};

//Si se queda siempre en el suelo y no despega... imposible que sea correcto.

//console.log(checkSledJump([0, 0, 0]));
// console.log(checkSledJump([1, 2, 3, 2, 1]));
// console.log(checkSledJump([0, 1, 0]));
// console.log(checkSledJump([0, 3, 2, 1]));
// console.log(checkSledJump([0, 1000, 1]));

console.log(checkSledJump([2, 4, 4, 6, 2]));
console.log(checkSledJump([1, 2, 3]));
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3]));
