import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const Router = () => {
  return (
    <Routes>
      {routes?.map(({ path, layout: Layout, children }, index) => {
        return (
          <Route key={index} element={<Layout />} path={path}>
            {children?.map(({ path, component: Component }, i) => {
              return <Route element={<Component />} path={path} key={i} />;
            })}
          </Route>
        );
      })}
    </Routes>
  );
};

export default Router;
