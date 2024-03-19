import Router from "./routes/routes";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useGlobalContext } from "./hooks/use-global-context";

function App() {
  const { basketItems } = useGlobalContext();
  const basketItemsCount = basketItems.length;
  return (
    <div>
      <Header basketItemsCount={basketItemsCount} />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
