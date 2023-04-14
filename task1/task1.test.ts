import { NodeInterface } from "./task1";
import { root, fakeRoot } from "./testData";
import { countLeafs, calculateDepth, areIdentical } from "./task1";

const emptyTree = null;
const rootOnly: NodeInterface = {
  val: 1,
  left: null,
  right: null,
};

const leftChildOnlyRoot: NodeInterface = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
};

describe("testing countLeafs function", () => {
  test("example tree has 5 leafs", () => {
    expect(countLeafs(root)).toBe(5);
  });

  test("empty trees have no leafs", () => {
    expect(countLeafs(emptyTree)).toBe(0);
  });

  test("trees with only root only should have 1 leaf", () => {
    expect(countLeafs(rootOnly)).toBe(1);
  });
});

describe("testing calculateDepth function", () => {
  test("example tree has depth equal to 4", () => {
    expect(calculateDepth(root)).toBe(4);
  });

  test("empty trees have no depth", () => {
    expect(calculateDepth(emptyTree)).toBe(0);
  });

  test("trees with only root have no depth", () => {
    expect(calculateDepth(rootOnly)).toBe(0);
  });

  test("trees with only one child which is a leaf have depth equal to 1", () => {
    expect(calculateDepth(leftChildOnlyRoot)).toBe(1);
  });
});

describe("testing areIdentical function", () => {
  test("tree is identical to itself", () => {
    expect(areIdentical(root, root)).toBe(true);
  });

  test("empty tree are not identical to not empty ones", () => {
    expect(areIdentical(root, emptyTree)).toBe(false);
  });

  test("empty tress are identical to empty trees", () => {
    expect(areIdentical(emptyTree, emptyTree)).toBe(true);
  });

  test("different trees are not identical to each other 1", () => {
    expect(areIdentical(root, leftChildOnlyRoot)).toBe(false);
  });

  test("different trees are not identical to each other 2", () => {
    expect(areIdentical(root, fakeRoot)).toBe(false);
  });
});
