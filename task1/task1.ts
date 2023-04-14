// assuming that the structure has two children at most, for better scalability you could swap 'left' and 'right' with 'children' array
interface NodeInterface {
  val: number;
  left: NodeInterface | null;
  right: NodeInterface | null;
}

const root: NodeInterface = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: { val: 5, left: null, right: null },
  },
  right: {
    val: 7,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 0,
      left: { val: 2, left: null, right: null },
      right: {
        val: 8,
        left: null,
        right: {
          val: 5,
          left: null,
          right: null,
        },
      },
    },
  },
};

const fake: NodeInterface = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: { val: 5, left: null, right: null },
  },
  right: {
    val: 7,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 0,
      left: { val: 2, left: null, right: null },
      right: {
        val: 8,
        left: null,
        right: {
          val: 5,
          left: null,
          right: null,
        },
      },
    },
  },
};

const countLeafs = (node: NodeInterface | null): number => {
  if (!node) return 0;
  if (!node.left && !node.right) return 1;
  let sum = 0;

  sum += countLeafs(node?.left);
  sum += countLeafs(node?.right);

  return sum;
};

const calculateDepth = (initialNode: NodeInterface): number => {
  let max = 0;
  const traverse = (node: NodeInterface, cur: number) => {
    if (!node.left && !node.right && cur > max) max = cur;

    if (node.left) traverse(node.left, cur + 1);
    if (node.right) traverse(node.right, cur + 1);
  };
  traverse(initialNode, 0);
  return max;
};

// assuming that the order of children in children array matters
const areIdentical = (
  node1: NodeInterface | null,
  node2: NodeInterface | null
): boolean => {
  if (!(node1 && node2)) return node1 === node2;
  let isLeftSideIdentical = areIdentical(node1.left, node2.left);
  let isRightSideIdentical = areIdentical(node1.right, node2.right);

  return !!(
    node1?.val === node2?.val &&
    isLeftSideIdentical &&
    isRightSideIdentical
  );
};

console.log(countLeafs(root));
console.log(calculateDepth(root));
console.log(areIdentical(root, fake));
