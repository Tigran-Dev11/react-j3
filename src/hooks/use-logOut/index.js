import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("isLogin");
    navigate("/");
  };
  return logout;
};

export default useLogout;