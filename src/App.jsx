import Navbar from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home/>
      < Footer />
    </div>
  );
};
export default App;
