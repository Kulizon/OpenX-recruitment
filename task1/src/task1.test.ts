import { areTreesIdentical } from "./task1";
import {
  root,
  fakeRoot,
  leftChildOnlyRoot,
  rootOnly,
  emptyTree,
} from "./testData";

describe("testing countLeafs function", () => {
  test("example tree has 5 leafs", () => {
    expect(root.countLeafs()).toBe(5);
  });

  test("empty trees have no leafs", () => {
    expect(emptyTree.countLeafs()).toBe(0);
  });

  test("trees with only root have only 1 leaf", () => {
    expect(rootOnly.countLeafs()).toBe(1);
  });
});

describe("testing calculateDepth function", () => {
  test("example tree has depth equal to 4", () => {
    expect(root.calculateDepth()).toBe(4);
  });

  test("empty trees have no depth", () => {
    expect(emptyTree.calculateDepth()).toBe(0);
  });

  test("trees with only root have no depth", () => {
    expect(rootOnly.calculateDepth()).toBe(0);
  });

  test("trees with only one child which is a leaf have depth equal to 1", () => {
    expect(leftChildOnlyRoot.calculateDepth()).toBe(1);
  });
});

describe("testing areIdentical function", () => {
  test("tree is identical to itself", () => {
    expect(areTreesIdentical(root, root)).toBe(true);
  });

  test("tree is identical to its copy", () => {
    expect(areTreesIdentical(root, Object.assign({}, root))).toBe(true);
  });

  test("empty trees are not identical to not empty ones", () => {
    expect(areTreesIdentical(root, emptyTree)).toBe(false);
  });

  test("empty tress are identical to empty trees", () => {
    expect(areTreesIdentical(emptyTree, emptyTree)).toBe(true);
  });

  test("different trees are not identical to each other 1", () => {
    expect(areTreesIdentical(root, leftChildOnlyRoot)).toBe(false);
  });

  test("different trees are not identical to each other 2", () => {
    expect(areTreesIdentical(root, fakeRoot)).toBe(false);
  });
});
