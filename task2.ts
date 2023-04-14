import fetch from "node-fetch";

const USERS_URL = "https://fakestoreapi.com/users";

interface FetchResponseInterface {
  status: 0 | -1;
  data: unknown;
}

const fetchData = async (fetchUrl: string): Promise<FetchResponseInterface> => {
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return { status: 0, data: data };
  } catch (e) {
    console.log(e);
    return { status: -1, data: e };
  }
};

const data = await fetchData(USERS_URL);
console.log(data);

