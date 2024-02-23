import { Footer } from "./components/footer";
import { Header } from "./components/header";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
