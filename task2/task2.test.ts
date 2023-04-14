import {
  CartsDataInterface,
  ProductsDataInterface,
  UsersDataInterface,
} from "./interfaces";
import {
  findMostExpensiveCart,
  findFurthestUsers,
  retrieveProductCategories,
} from "./task2";

const exampleCarts: CartsDataInterface[] = [
  {
    products: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 4 },
      { productId: 3, quantity: 2 },
    ],
  },
  {
    products: [{ productId: 1, quantity: 1 }],
  },
];

const exampleProducts: ProductsDataInterface[] = [
  { id: 1, category: "house", price: 100, title: "Fancy rug" },
  { id: 2, category: "house", price: 30, title: "Fancy vase" },
  { id: 3, category: "garden", price: 10, title: "Awesome pot" },
];

const exampleUsers: UsersDataInterface[] = [
  {
    id: 1,
    address: {
      geolocation: {
        lat: 10,
        long: 10,
      },
    },
  },
  {
    id: 2,
    address: {
      geolocation: {
        lat: 5,
        long: 2,
      },
    },
  },
  {
    id: 3,
    address: {
      geolocation: {
        lat: 0,
        long: -5,
      },
    },
  },
  {
    id: 4,
    address: {
      geolocation: {
        lat: 10,
        long: 3,
      },
    },
  },
];

describe("testing retrieveProductCategories function", () => {
  test("empty products return 0", () => {
    expect(JSON.stringify(retrieveProductCategories([], 0))).toBe(
      JSON.stringify({})
    );
  });

  test("example products 1", () => {
    expect(JSON.stringify(retrieveProductCategories(exampleProducts, 0))).toBe(
      JSON.stringify({ house: 130, garden: 10 })
    );
  });
});

describe("testing findMostExpensiveCart function", () => {
  test("empty cart returns 0", () => {
    expect(findMostExpensiveCart([], 0, [], 0)).toBe(0);
  });
  test("either status being -1 results in return of -1", () => {});
  test("example carts 1", () => {
    expect(findMostExpensiveCart(exampleCarts, 0, exampleProducts, 0)).toBe(
      240
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
      JSON.stringify([1, 3])
    );
  });
});
