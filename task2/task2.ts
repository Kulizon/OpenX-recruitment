import {
  UsersDataInterface,
  ProductCategoryInterface,
  ProductsDataInterface,
  CartsDataInterface,
} from "./interfaces.ts";
import { USERS_URL, PRODUCTS_URL, CARTS_URL, fetchData } from "./utils.ts";

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

// task 2
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

// task 3
const findMaxCart = (
  data: CartsDataInterface[] | null,
  status: 0 | -1,
  products: ProductsDataInterface[] | null
) => {
  if (status === -1 || !data || !products) {
    console.log("Error retriving cart or products data!");
    return {};
  }

  // create dictionary with productIds as names and product prices as values
  const productValues: { [key: string]: number } = {};
  products.forEach((prod) => {
    productValues[prod.id.toString()] = prod.price;
  });

  // find max cart value
  let max = 0;
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

// console.log(retrieveProductCategories(productsData, productsResponseStatus));
console.log(findMaxCart(cartsData, cartsResponseStatus, productsData));
