import {
  findMostExpensiveCart,
  findFurthestUsers,
  retrieveProductCategories,
} from "./task2";

import { exampleCarts, exampleProducts, exampleUsers } from "./testData";

describe("testing retrieveProductCategories function", () => {
  test("empty products return 0", () => {
    expect(JSON.stringify(retrieveProductCategories([], 0))).toBe(
      JSON.stringify({})
    );
  });

  test("example products 1", () => {
    expect(JSON.stringify(retrieveProductCategories(exampleProducts, 0))).toBe(
      JSON.stringify({
        "men's clothing": 204.23000000000002,
        jewelery: 883.98,
        electronics: 1994.99,
        "women's clothing": 157.72,
      })
    );
  });
});

describe("testing findMostExpensiveCart function", () => {
  test("empty cart returns 0", () => {
    expect(JSON.stringify(findMostExpensiveCart([], 0, [], 0, [], 0))).toBe(
      JSON.stringify({
        name: {
          firstname: "",
          lastname: "",
        },
        value: 0,
      })
    );
  });
  test("either status being -1 results in return of -1", () => {
    expect(() => {
      findMostExpensiveCart(exampleCarts, 0, null, -1, exampleUsers, 0);
    }).toThrow("Error retriving cart, products or users data!");
  });
  test("example carts 1", () => {
    expect(
      JSON.stringify(
        findMostExpensiveCart(
          exampleCarts,
          0,
          exampleProducts,
          0,
          exampleUsers,
          0
        )
      )
    ).toBe(
      JSON.stringify({
        name: {
          firstname: "john",
          lastname: "doe",
        },
        value: 2578.7,
      })
    );
  });
});

describe("testing findFurthestUsers function", () => {
  test("empty users array returns 0", () => {
    expect(JSON.stringify(findFurthestUsers([], 0))).toBe(
      JSON.stringify([-1, -1])
    );
  });

  test("example users 1", () => {
    expect(JSON.stringify(findFurthestUsers(exampleUsers, 0))).toBe(
      JSON.stringify([1, 5])
    );
  });
});
