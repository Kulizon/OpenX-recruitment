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

// return distance in meters between two points, based on Haversine formula
export const calculateDistance = (
  lat1: number,
  lat2: number,
  long1: number,
  long2: number
): number => {
  const R = 6371e3; // metres
  const rad1 = (lat1 * Math.PI) / 180; // φ1 in radians
  const rad2 = (lat2 * Math.PI) / 180; // φ2 in radians
  const latDeltaRad = ((lat2 - lat1) * Math.PI) / 180; // φλ in radians
  const longDeltaRad = ((long2 - long1) * Math.PI) / 180; // Δλ in radians

  const a =
    Math.sin(latDeltaRad / 2) * Math.sin(latDeltaRad / 2) +
    Math.cos(rad1) *
      Math.cos(rad2) *
      Math.sin(longDeltaRad / 2) *
      Math.sin(longDeltaRad / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in meters
};
