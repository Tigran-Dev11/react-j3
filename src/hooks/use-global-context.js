import { useContext } from "react";
import { UserContext } from "../providers/user-provider";


export const useGlobalContext = () => {
  return useContext(UserContext);
};