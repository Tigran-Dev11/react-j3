import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const Router = () => {
  return (
    <Routes>
      {routes.map(({ id, path, component: Componnet }) => (
        <Route key={id} path={path} element={<Componnet />} />
      ))}
    </Routes>
  );
};

export default Router;
