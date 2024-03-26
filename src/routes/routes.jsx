import { Routes, Route } from "react-router-dom";
import { routes } from "./route";

const Router = () => {
  return (
    <Routes>
      {routes.map(({ id, href, component }) => (
        <Route key={id} path={href} element={component} />
      ))}
    </Routes>
  );
};

export default Router;