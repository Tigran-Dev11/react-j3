
import Footer from "./compoents/footer";
import Header from "./compoents/header";
import { useLanguageRedirect } from "./hooks/use-language";

import Router from "./routes/route";


function App() {
  useLanguageRedirect();
  return (
    <>
    <Header/>
      <Router/>
      <Footer/>
    </>
  );
}

export default App;
