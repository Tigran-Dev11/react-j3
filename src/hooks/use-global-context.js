import { useContext } from "react";
import { GlobalContext } from "../global-provider/global-provider";


export const useGlobalContext = () => {
  return useContext(GlobalContext);
};