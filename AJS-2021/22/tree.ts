export class ThreeNode {
  value: number;
  left: ThreeNode | null;
  right: ThreeNode | null;

  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

export class Tree {
  root: ThreeNode | null;
  totalValueTree: number;

  constructor(tree: ThreeNode) {
    this.root = tree;
    this.totalValueTree = this.root.value;
  }

  insert(value: number) {
    const newNode = new ThreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
    return this;
  }

  search(value: number, tree = this.root): ThreeNode | void {
    if (!this.root) return console.error("The Binary Search Tree is empty");
    if (!tree) return console.error("The node is not in the tree");

    if (value < tree.value) {
      return this.search(value, tree.left);
    } else if (value > tree.value) {
      return this.search(value, tree.right);
    } else {
      console.log("The value has been finded in the Tree");
      return tree;
    }
  }

  iterate(tree = this.root) {
    let iterateTree = true;
    while (iterateTree) {
      if (tree?.left) {
        this.totalValueTree += tree.left.value;
        this.iterate(tree.left);
      }
      if (tree?.right) {
        this.totalValueTree += tree.right.value;
        this.iterate(tree.right);
      }
      return;
    }
  }

  
}
