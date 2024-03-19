import Header from "./components/constants/header/header";
import Footer from "./components/constants/footer/footer";
import Router from "./routes/routes";
import { ROUTES } from "./utils/constants";
function App() {
  return (
    <div>
      <Header /> 
      <NavLink to={ROUTES.basket}>Go basket</NavLink>
      <Router />
      <Footer />
    </div>
  );
}

export default App;
