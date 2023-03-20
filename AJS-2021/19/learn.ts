export const learn = (time: number, courses: number[]) => {
  if (typeof time !== "number" || !Array.isArray(courses))
    throw "error parameter";
  if (courses.length === 0) return [0, 0];

  let tmpValue = 0;
  let result: number[] = [];
  let tmpSuccessValue = 0;
  for (let i = 0; i < courses.length; i++) {
    const hoursPerCourse = courses[i];
    for (let j = i + 1; j < courses.length; j++) {
      const hoursPerCourse2 = courses[j];
      tmpValue = hoursPerCourse + hoursPerCourse2;

      if (tmpValue <= time && tmpValue > tmpSuccessValue) {
        result = [i, j];
        tmpSuccessValue = tmpValue;
      }
    }
  }
  if (result.length === 0) return null;
  return result;
};

console.log({ expected: [0, 2], result: learn(10, [2, 3, 8, 1, 4]) });
console.log({ expected: [1, 2], result: learn(15, [2, 10, 4, 1]) });
console.log({ expected: [0, 1], result: learn(25, [10, 15, 20, 5]) });
console.log({ expected: [1, 2], result: learn(8, [8, 2, 1]) });

console.log({ expected: [3, 4], result: learn(8, [8, 2, 1, 4, 3]) });
console.log({ expected: null, result: learn(4, [10, 14, 20]) });
console.log({ expected: null, result: learn(5, [5, 5, 5]) });
