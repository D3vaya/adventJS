import { ThreeNode, Tree } from "../22/tree";

export const checkIsSameTree = (treeA: ThreeNode, treeB: ThreeNode) => {
  if (!treeA || !treeB) throw "undefined parameter";
  const orderTree = (obj: ThreeNode) =>
    JSON.stringify(obj)
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");
  return orderTree(treeA) === orderTree(treeB);
};

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

console.log(checkIsSameTree(tree, tree)); // true
console.log(checkIsSameTree(tree, tree2)); // false
console.log(checkIsSameTree(tree2, tree2)); // true
