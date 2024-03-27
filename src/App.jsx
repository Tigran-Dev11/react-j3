import React  from "react";
import Footer from "./components/footer";
import { Header } from "./components/header";
import Router from "./routes/routes";

import { useLanguageRedirect } from './hooks/use-language/index';

function App() {
  useLanguageRedirect()
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
