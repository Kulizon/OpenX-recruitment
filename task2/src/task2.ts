import {
  UsersDataInterface,
  ProductCategoryInterface,
  ProductsDataInterface,
  CartsDataInterface,
  FullNameInterface,
} from "./interfaces.ts";
import {
  USERS_URL,
  PRODUCTS_URL,
  CARTS_URL,
  fetchData,
  calculateDistance,
} from "./utils.ts";

// task 2, returns dict with categories as names and values of products in according categories
export const retrieveProductCategories = (
  data: ProductsDataInterface[] | null,
  status: 0 | -1
): ProductCategoryInterface => {
  if (status === -1 || !data) {
    throw new Error("Error retriving products data!");
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
export const findMostExpensiveCart = (
  data: CartsDataInterface[] | null,
  status: 0 | -1,
  products: ProductsDataInterface[] | null,
  productsStatus: 0 | -1,
  users: UsersDataInterface[] | null,
  usersStatus: 0 | -1
): {
  name: FullNameInterface;
  value: Number;
} | null => {
  if (
    status === -1 ||
    productsStatus === -1 ||
    !data ||
    !products ||
    !users ||
    usersStatus == -1
  ) {
    throw new Error("Error retriving cart, products or users data!");
  }

  // create dictionary with productIds as names and product prices as values
  const productValues: { [key: string]: number } = {};
  products.forEach((prod) => {
    productValues[prod.id.toString()] = prod.price;
  });

  const userNames: { [key: string]: FullNameInterface } = {};
  users.forEach((user) => {
    userNames[user.id.toString()] = user.name;
  });

  // find max cart value
  let max = 0;
  let maxCart: {
    name: FullNameInterface;
    value: Number;
  } = {
    name: {
      firstname: "",
      lastname: "",
    },
    value: 0,
  };
  data.forEach((cart) => {
    // sum up each product in cart
    const cartValue = cart.products.reduce(
      (sum, prod) =>
        (sum += productValues[prod.productId.toString()] * prod.quantity),
      0
    );
    if (cartValue > max) {
      max = cartValue;
      maxCart.name = userNames[cart.userId];
      maxCart.value = cartValue;
    }
  });

  return maxCart;
};

// task 4, returns array with ids of two users that live furthest apart
export const findFurthestUsers = (
  data: UsersDataInterface[] | null,
  status: 0 | -1
): [number, number] => {
  if (status === -1 || !data) {
    throw new Error("Error retriving users data!");
  }

  let max = 0;
  let userIds: [number, number] = [-1, -1]; // [-1, -1] <=> users array was empty or has only one user
  const n = data.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const { lat: lat1, long: long1 } = data[i].address.geolocation;
      const { lat: lat2, long: long2 } = data[j].address.geolocation;
      const dist = calculateDistance(
        parseFloat(lat1),
        parseFloat(lat2),
        parseFloat(long1),
        parseFloat(long2)
      );

      if (dist > max) {
        max = dist;
        userIds = [data[i].id, data[j].id];
      }
    }
  }

  return userIds;
};

const main = async () => {
  const { status: userResponseStatus, data: userData } = await fetchData<
    UsersDataInterface[]
  >(USERS_URL);
  const { status: cartsResponseStatus, data: cartsData } = await fetchData<
    CartsDataInterface[]
  >(CARTS_URL);
  const { status: productsResponseStatus, data: productsData } =
    await fetchData<ProductsDataInterface[]>(PRODUCTS_URL);

  console.log(retrieveProductCategories(productsData, productsResponseStatus));
  console.log(
    findMostExpensiveCart(
      cartsData,
      cartsResponseStatus,
      productsData,
      productsResponseStatus,
      userData,
      userResponseStatus
    )
  );
  console.log(findFurthestUsers(userData, userResponseStatus));
};

main();
