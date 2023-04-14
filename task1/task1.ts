interface NodeInterface {
  val: number;
  children: NodeInterface[]; // todo -> add length of array
}

const root: NodeInterface = {
  val: 5,
  children: [
    {
      val: 3,
      children: [
        { val: 2, children: [] },
        { val: 5, children: [] },
      ],
    },
    {
      val: 7,
      children: [
        { val: 1, children: [] },
        {
          val: 0,
          children: [
            { val: 2, children: [] },
            { val: 8, children: [{ val: 5, children: [] }] },
          ],
        },
      ],
    },
  ],
};

const fake: NodeInterface = {
  val: 5,
  children: [
    {
      val: 3,
      children: [
        { val: 2, children: [] },
        { val: 5, children: [] },
      ],
    },
    {
      val: 7,
      children: [
        { val: 1, children: [] },
        {
          val: 0,
          children: [
            { val: 2, children: [] },
            { val: 8, children: [{ val: 5, children: [] }] },
          ],
        },
      ],
    },
  ],
};

const countLeaves = (node: NodeInterface): number => {
  if (node.children.length === 0) return 1;
  let sum = 0;
  for (let i = 0; i < node.children.length; i++) {
    sum += countLeaves(node.children[i]);
  }
  return sum;
};

const calculateDepth = (initialNode: NodeInterface): number => {
  let max = 0;
  const traverse = (node: NodeInterface, cur: number) => {
    if (node.children.length === 0 && cur > max) max = cur;

    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i], cur + 1);
    }
  };

  traverse(initialNode, 0);
  return max;
};

// assuming that the order of children in children array matters
const areIdentical = (node1: NodeInterface, node2: NodeInterface): boolean => {
  let areChildrenIdentical = node1.children.length === node2.children.length;

  let i = 0;
  while (areChildrenIdentical && i < node1.children.length) {
    areChildrenIdentical = areIdentical(node1.children[i], node2.children[i]);
    i++;
  }

  return node1.val === node2.val && areChildrenIdentical;
};

// console.log(countLeaves(root));
// console.log(calculateDepth(root));
console.log(areIdentical(root, fake));
