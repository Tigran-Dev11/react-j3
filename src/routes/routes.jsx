import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const Router = () => {
  return (
    <Routes>
      {routes.map(({ id, path, component }) => (
        <Route key={id} path={path} element={component} />
      ))}
    </Routes>
  );    
};
export default Router;
