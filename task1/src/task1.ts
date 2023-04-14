import { root, fakeRoot } from "./testData";

// assuming that the structure has two children at most, for better scalability you could swap 'left' and 'right' with 'children' array
export interface NodeInterface {
  val: number;
  left: NodeInterface | null;
  right: NodeInterface | null;
}

// task 1
export const countLeafs = (node: NodeInterface | null): number => {
  if (!node) return 0;
  if (!node.left && !node.right) return 1;
  let sum = 0;

  sum += countLeafs(node?.left);
  sum += countLeafs(node?.right);

  return sum;
};

// task 2
export const calculateDepth = (initialNode: NodeInterface | null): number => {
  let max = 1;
  if (!initialNode?.left && !initialNode?.right) return 0;

  const traverse = (node: NodeInterface, cur: number) => {
    if (!node.left && !node.right && cur > max) max = cur - 1;

    if (node.left) traverse(node.left, cur + 1);
    if (node.right) traverse(node.right, cur + 1);
  };
  traverse(initialNode, 1);
  return max;
};

// task 3
export const areIdentical = (
  node1: NodeInterface | null,
  node2: NodeInterface | null
): boolean => {
  if (!(node1 && node2)) return node1 === node2; // if at least one node equals to null -> check if the the other one also equal to null
  const isLeftSideIdentical = areIdentical(node1.left, node2.left);
  const isRightSideIdentical = areIdentical(node1.right, node2.right);

  return !!(
    node1?.val === node2?.val &&
    isLeftSideIdentical &&
    isRightSideIdentical
  );
};
