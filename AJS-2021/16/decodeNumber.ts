export const decodeNumber = (symbols: string) => {
  if (typeof symbols !== "string") throw "error parameter";

  const map: Map<string, number> = new Map();
  map.set(".", 1);
  map.set(",", 5);
  map.set(":", 10);
  map.set(";", 50);
  map.set("!", 100);

  //const currentSymbols = [".", ",", ":", ";", "!"];

  let acc = 0;
  for (let index = 0; index < [...symbols].length; index++) {
    let nextSymbol = map.get(symbols[index + 1])!;
    const value = map.get(symbols[index])!;
    if (value < nextSymbol) acc = acc - value;
    else acc = value + acc;
  }

  return acc;
};

console.log({ expected: 107, result: decodeNumber(".........!") });
console.log({ expected: 5, result: decodeNumber("..,") });
console.log({ expected: 95, result: decodeNumber("..,!") });
console.log({ expected: 49, result: decodeNumber(".;!") });
