# Get started

## Clone the repository

```bash
git clone
```

## Task 1

```bash
cd task1
npm i
```

### to start program:

```bash
npm run start
```

### to run tests:

```bash
npm run test
```

## Task 2

```bash
cd task2
npm i
```

### to run:

```bash
npm run start
```

### to run tests:

```bash
npm run test
```

# Description

The programs are written in typescript and tests are done with the help of jest.

## Task 1

To implement the tree structure I used regular javascript objects with typescript support.
Another valid option was to create 'Node' class as well.
I assumed that the tree has two children at most. For better scalability 'leftChild' and 'rightChild' could be replaced with 'children' array.

### countLeaves()

Accepts an object of type NodeInterface and returns the number of leafs that the tree has.

### calculateDepth()

Accepts an object of type NodeInterface and returns the largest number of edges in a path from the root to a leaf.

### areIdentical()

Accepts an object of type NodeInterface and returns a boolean. Check if two trees are identical - each node has the same value and children.

## Task 2

The data is retrieved from the server using fetch API.
Each response is of type FetchResponseInterface - an object with data and status property.
Status is either '0' or '-1', where '0' means that the data was fetched sucessfully, where as '-1' means that an error occured.

### retrieveProductCategories()

Returns a dictionary with categories as property names and prices of products in that category as values.

### findMostExpensiveCart()

Returns the value of the most expensive cart.

### findFurthestUsers()

Finds users that are furthest away. Returns array with two elements where the first element is the id of the first user and the second element is the id of the second user.
