import { Routes, Route } from "react-router-dom";
import { routes } from "./route";

const Router = () => {
  return (
    <Routes>
      {routes.map(({ id, path, component: Component }) => (
        <Route key={id} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
export default Router;
