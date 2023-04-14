# Get started

## Clone the repository

```bash
git clone https://github.com/Kulizon/OpenX-recruitment-tasks
```

```bash
npm install
```

### run:

```bash
npm run start
```

### run tests:

```bash
npm run test
```

# Description

The program is written in typescript and tests are done with the help of jest.

To implement the tree structure I created a class 'Tree'. A tree has a root which is of type 'Node' Each 'Node' has a value, left child and right child. I assumed that the tree has two children at most. For better scalability 'left' and 'right' properties could be replaced with 'children' array.

### countLeafs()

Returns the number of leafs that the tree has.

### calculateDepth()

Returns the largest number of edges in a path from the root to a leaf.

### areTreesIdentical()

Returns a boolean. Checks if two trees are identical - two trees are identical if each node has the same value and children.
