// return type of fetchData function
export interface FetchResponseInterface<DataType> {
  status: 0 | -1; // 0 - ok, -1 - error
  data: DataType | null;
}

// data received from api
export interface UsersDataInterface {
  id: number;
  address: {
    geolocation: {
      lat: number;
      long: number;
    };
  };
}

export interface CartsDataInterface {
  products: { productId: number; quantity: number }[];
}
export interface ProductsDataInterface {
  id: number;
  category: string;
  price: number;
  title: string;
}

// task 2
export interface ProductCategoryInterface {
  [key: string]: number;
}
