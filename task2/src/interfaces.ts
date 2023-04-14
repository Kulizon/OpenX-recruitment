// return type of fetchData function
export interface FetchResponseInterface<DataType> {
  status: 0 | -1; // 0 - ok, -1 - error
  data: DataType | null;
}

/*
 Data received from api 
*/

export interface UsersDataInterface {
  id: number;
  address: AddressInterface;
  email: string;
  username: string;
  password: string;
  name: FullNameInterface;
  phone: string;
}

export interface FullNameInterface {
  firstname: string;
  lastname: string;
}

interface AddressInterface {
  geolocation: {
    lat: string;
    long: string;
  };
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface CartsDataInterface {
  products: ProductInterface[];
  id: number;
  userId: number;
  date: string;
}

interface ProductInterface {
  productId: number;
  quantity: number;
}

export interface ProductsDataInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingInterface;
}

interface RatingInterface {
  rate: number;
  count: number;
}

// task 2
export interface ProductCategoryInterface {
  [key: string]: number;
}
