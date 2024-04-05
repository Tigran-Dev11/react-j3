import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const api = {
  getUsers: () => axios("/users")
};
