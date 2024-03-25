import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import LanguageSwitecher from "./components/LanguageSwitcher/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
      {/* <LanguageSwitecher/> */}
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
