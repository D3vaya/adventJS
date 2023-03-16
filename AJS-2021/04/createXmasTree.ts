export const createXmasTree = (heightTree: number) => {
  if (!heightTree) throw "undefined params";
  if (typeof heightTree !== "number") throw "params not a number";

  if (heightTree > 100) return false;
  if (Math.sign(heightTree) === -1) return false;

  let tree = "";
  let [asterisk, underscore] = ["*", "_"];

  const ht = heightTree * 2;
  const lineBreak = ht - 1;

  let counterPrintAsterisk = heightTree;
  let numberAsteriks = 1;
  let numberOfCharacters = 1;

  for (let h = 0; h < heightTree; h++) {
    for (let i = 1; i < heightTree * 2; i++) {
      if (i <= lineBreak) {
        
        if (counterPrintAsterisk === i) tree += asterisk.repeat(numberAsteriks);
        else if (lineBreak >= i + numberAsteriks - 1) tree += underscore;

        if (lineBreak === i) tree += "\n";
        if (numberOfCharacters <= lineBreak) numberOfCharacters = 0;
      }
      numberOfCharacters++;
    }
    numberAsteriks += 2;
    counterPrintAsterisk--;
  }
  tree += createTrunk(heightTree);
  return tree;
};

export const createTrunk = (heightTree: number): string => {
  let trunk = "";
  let [trunkSymbol, underscrore] = ["#", "_"];

  const ht = heightTree * 2 - 1;
  const printTrunk = heightTree - 1;
  for (let z = 0; z < 2; z++) {
    for (let x = 0; x < ht; x++) {
      if (x === printTrunk) trunk += trunkSymbol;
      else trunk += underscrore;
    }
    if (z === 0) trunk += "\n";
  }
  return trunk;
};

console.log(createXmasTree(5));
createXmasTree(5);
//const a = "____#________#____";
//console.log('->',a.substring(0, a.length/2))
