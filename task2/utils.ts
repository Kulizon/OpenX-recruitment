import fetch from "node-fetch";
import { FetchResponseInterface } from "./interfaces";

// api urls
export const USERS_URL = "https://fakestoreapi.com/users";
export const CARTS_URL =
  "https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07";
export const PRODUCTS_URL = "https://fakestoreapi.com/products";

// fetching data from api with error handling
export const fetchData = async <DataType>(
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
