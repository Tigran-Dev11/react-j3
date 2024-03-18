import { NavLink } from "react-router-dom";
import Router from "./routes/routes";
import { ROUTES } from "./utils/constants";

function App() {
  return (
    <div>
      <header>
         <NavLink to={ROUTES.basket}>Go basket</NavLink>
      </header>
      <Router/>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
