export class Node {
  readonly val: number;
  readonly left: Node | null = null;
  readonly right: Node | null = null;

  constructor(
    nodeVal: number,
    leftChild: Node | null,
    rightChild: Node | null
  ) {
    this.val = nodeVal;
    if (leftChild)
      this.left = new Node(leftChild.val, leftChild.left, leftChild.right);
    if (rightChild)
      this.right = new Node(rightChild.val, rightChild.left, rightChild.right);
  }

  isLeaf(): boolean {
    return !this.left && !this.right;
  }
}
