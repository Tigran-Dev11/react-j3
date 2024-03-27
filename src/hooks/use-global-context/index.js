import { useContext } from "react";
import { GlobalContext } from "../../providers/global-provider/global-provider";


export const useGlobalContext = () => {
  return useContext(GlobalContext);
};