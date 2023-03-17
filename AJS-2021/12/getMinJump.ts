export const getMinJump = (obstacles: number[]) => {
  if (!Array.isArray(obstacles)) throw "parameter nota a array";
  if (obstacles.includes(0)) throw "obstacle in position 0";

  let result = 2;
  let bool = true;
  let prevResult = null;

  while (bool) {
    obstacles.map((obstacle) => !(obstacle % result) && result++);
    result === prevResult ? (bool = false) : (prevResult = result);
  }
  return result;
};
