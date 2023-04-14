import fetch from "node-fetch";

const USERS_URL = "https://fakestoreapi.com/users";
const CARTS_URL =
  "https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07";
const PRODUCTS_URL = "https://fakestoreapi.com/products";

interface FetchResponseInterface<DataType> {
  status: 0 | -1;
  data: DataType | null;
}

interface UsersDataInterface {}
interface CartsDataInterface {}
interface ProductsDataInterface {
  category: string;
  price: number;
}

interface ProductCategoryInterface {
  [key: string]: number;
}

const fetchData = async <DataType>(
  fetchUrl: string
): Promise<FetchResponseInterface<DataType>> => {
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return { status: 0, data: data };
  } catch (e) {
    console.log(e);
    return { status: -1, data: null };
  }
};

const { status: userResponseStatus, data: userData } = await fetchData<
  UsersDataInterface[]
>(USERS_URL);
const { status: cartsResponseStatus, data: cartsData } = await fetchData<
  CartsDataInterface[]
>(CARTS_URL);
const { status: productsResponseStatus, data: productsData } = await fetchData<
  ProductsDataInterface[]
>(PRODUCTS_URL);

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
    if (!output[prod.category]) output[prod.category] = 0;
    output[prod.category] += prod.price;
  });

  return output;
};

console.log(retrieveProductCategories(productsData, productsResponseStatus));
