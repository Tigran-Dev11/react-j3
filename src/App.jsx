import { I18nextProvider, useTranslation } from "react-i18next";
import Footer from "./components/footer";
import { Header } from "./components/header";

import Router from "./routes/routes";


function App() {
  const { i18n } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <div>
    
        <Header />
        <Router />
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
