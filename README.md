# Get started

## Clone the repository

```bash
git clone https://github.com/Kulizon/OpenX-recruitment-tasks
```

## Task 1

```bash
cd task1
npm i
```

### run:

```bash
npm run start
```

### run tests:

```bash
npm run test
```

## Task 2

```bash
cd task2
npm i
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

The programs are written in typescript and tests are done with the help of jest.

## Task 1

To implement the tree structure I used a class 'Tree' and each node is of type 'Node'.
I assumed that the tree has two children at most. For better scalability 'left' and 'right' properties could be replaced with 'children' array.

### countLeaves()

Returns the number of leafs that the tree has.

### calculateDepth()

Returns the largest number of edges in a path from the root to a leaf.

### areIdentical()

Rreturns a boolean. Checks if two trees are identical - each node has the same value and children.

## Task 2

The data is retrieved from the server using fetch API.
Each response is of type FetchResponseInterface - an object with data and status property.
Status is either '0' or '-1', where '0' means that the data was fetched sucessfully, where as '-1' means that an error occured.

### retrieveProductCategories()

Returns a dictionary with categories as property names and prices of products in that category as values.

### findMostExpensiveCart()

Returns the value of the most expensive cart and its owner.

### findFurthestUsers()

Finds users that are furthest away. Returns array with two elements where the first element is the id of the first user and the second element is the id of the second user.
