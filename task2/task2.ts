import {
  UsersDataInterface,
  ProductCategoryInterface,
  ProductsDataInterface,
  CartsDataInterface,
} from "./interfaces.ts";
import {
  USERS_URL,
  PRODUCTS_URL,
  CARTS_URL,
  fetchData,
  calculateDistance,
} from "./utils.ts";

// task 1
const { status: userResponseStatus, data: userData } = await fetchData<
  UsersDataInterface[]
>(USERS_URL);
const { status: cartsResponseStatus, data: cartsData } = await fetchData<
  CartsDataInterface[]
>(CARTS_URL);
const { status: productsResponseStatus, data: productsData } = await fetchData<
  ProductsDataInterface[]
>(PRODUCTS_URL);

// task 2, returns dict with categories as names and values of products in according categories 
const retrieveProductCategories = (
  data: ProductsDataInterface[] | null,
  status: 0 | -1
): ProductCategoryInterface => {
  if (status === -1 || !data) {
    console.log("Error retriving products data!");
    return {};
  }

  const output: ProductCategoryInterface = {};
  data.map((prod) => {
    // turn each category name into object property and then sum every product price to their according category
    if (!output[prod.category]) output[prod.category] = 0;
    output[prod.category] += prod.price;
  });

  return output;
};

// task 3, returns the value most valuable cart
const findMostExpensiveCart = (
  data: CartsDataInterface[] | null,
  status: 0 | -1,
  productsStatus: 0 | -1,
  products: ProductsDataInterface[] | null
): number => {
  if (status === -1 || productsStatus === -1 || !data || !products) {
    console.log("Error retriving cart or products data!");
    return -1;
  }

  // create dictionary with productIds as names and product prices as values
  const productValues: { [key: string]: number } = {};
  products.forEach((prod) => {
    productValues[prod.id.toString()] = prod.price;
  });

  // find max cart value
  let max = -1; // -1 <=> carts array was empty
  data.forEach((cart) => {
    // sum up each product in cart
    const cartValue = cart.products.reduce(
      (sum, prod) =>
        (sum += productValues[prod.productId.toString()] * prod.quantity),
      0
    );
    if (cartValue > max) max = cartValue;
  });

  return max;
};

// task 4, returns array with ids of two users that live furthest apart
const findFurthestUsers = (
  data: UsersDataInterface[] | null,
  status: 0 | -1
): [number, number] => {
  if (status === -1 || !data) {
    console.log("Error retriving users data!");
    return [-1, -1];
  }

  let max = -1; // -1 <=> users array was empty or has only one user
  let userIds: [number, number] = [-1, -1]; // [-1, -1] <=> users array was empty or has only one user
  const n = data.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const { lat: lat1, long: long1 } = data[i].address.geolocation;
      const { lat: lat2, long: long2 } = data[j].address.geolocation;
      const dist = calculateDistance(lat1, lat2, long1, long2);

      if (dist > max) {
        max = dist;
        userIds = [data[i].id, data[j].id];
      }
    }
  }

  return userIds;
};

console.log(retrieveProductCategories(productsData, productsResponseStatus));
console.log(findMostExpensiveCart(cartsData, cartsResponseStatus, productsResponseStatus, productsData));
console.log(findFurthestUsers(userData, userResponseStatus));
