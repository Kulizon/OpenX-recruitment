import { Node } from "./node";

export class Tree {
  readonly root: Node | null;

  constructor(initialNode: Node | null) {
    this.root = initialNode;
  }

  // count leafs of the tree
  countLeafs = (): number => {
    let leafsCounter = 0;

    const traverse = (node: Node) => {
      if (node.isLeaf()) leafsCounter++;

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    if (!this.root) return 0;
    traverse(this.root);

    return leafsCounter;
  };

  // calculate the distance between a root and the furthest leaf
  calculateDepth(): number {
    let max = 1;
    if (!this.root || this.root.isLeaf()) return 0; // if the tree is empty or is just a leaf then depth equals to 0

    const traverse = (node: Node, cur: number) => {
      if (node.isLeaf() && cur > max) max = cur - 1;

      if (node.left) traverse(node.left, cur + 1);
      if (node.right) traverse(node.right, cur + 1);
    };
    traverse(this.root, 1);
    return max;
  }
}

// task 3
export const areTreesIdentical = (root1: Tree, root2: Tree): boolean => {
  const traverse = (node1: Node | null, node2: Node | null): boolean => {
    if (!(node1 && node2)) return node1 === node2; // if at least one node equals to null -> check if the the other one also equal to null
    const isLeftSideIdentical = traverse(node1.left, node2.left);
    const isRightSideIdentical = traverse(node1.right, node2.right);

    return (
      node1?.val === node2?.val && isLeftSideIdentical && isRightSideIdentical
    );
  };

  return traverse(root1.root, root2.root);
};
