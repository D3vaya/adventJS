import { Tree, ThreeNode } from "./tree";

export const countDecorations = (bigTree: ThreeNode) => {
  if (typeof bigTree !== "object") throw "error in parameter";
  if (Object(bigTree).length === 0) throw "empty object";
  
  const tree = new Tree(bigTree);
  tree.iterate()
  return tree.totalValueTree;
};

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}
const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  }
}

console.log({ expected: 6, result: countDecorations(tree) });
