export const canReconfigure = (from: string, to: string) => {
  if (typeof from !== "string") throw "from is a not string";
  if (typeof to !== "string") throw "to is a not string";

  const isSameLength = from.length === to.length;
  if (!isSameLength) return false;

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size;
  if (!hasSameUniqueLetters) return false;
  
  const transformation:any = {};
  for (let index = 0; index < from.length; index++) {
    const fromLetter = from[index];
    const toLetter = to[index];

    const storedLetter = transformation[fromLetter];
    if(storedLetter && storedLetter !== toLetter) return false;

    transformation[fromLetter] = toLetter;
    
  }
  

  return true;
};

console.log({ expected: true, response: canReconfigure("BAL", "LIB") });

console.log({ expected: false, response: canReconfigure("CON", "JUU") });
