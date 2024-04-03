import axios from "axios";

export const useUserActions = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const token =
    "4859a411b1d21f2494d65e15ec6c9f3af6b204d0e12a1ae507c88e69ea35e95b";

  const deleteUser = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    try {
      await axios(`/users/${id}`, options);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (body) => {
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };
    try {
      await axios(`/users`, options);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (id, body) => {
    const options = {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };
    try {
      await axios(`/users/${id}`, options);
    } catch (error) {
      console.log(error);
    }
  };

  return { deleteUser, createUser, updateUser };
};
