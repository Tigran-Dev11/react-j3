import { Routes, Route } from "react-router-dom";
import { routes } from "./route";

const Router = () => {
  return (
    <Routes>
      {routes.map(({ id, href, component:Component }) => (
        <Route key={id} path={href} element={<Component/>} />
      ))}
    </Routes>
  );
};

export default Router;