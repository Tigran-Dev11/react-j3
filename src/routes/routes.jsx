import { Routes, Route } from "react-router-dom";
import { routes } from "./route";

import { useTranslation } from "react-i18next";

const Router = () => {

  return (
    <Routes>
      {routes.map(({ id, path, component:Component }) => (
        <Route key={id}   path={path} element={<Component/>} />
      ))}
    </Routes>
  );    
};
export default Router;
