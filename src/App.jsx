
import Header from "./compoents/header";
import { useLanguageRedirect } from "./hooks/use-language";
import Router from "./routes/route";


function App() {
  useLanguageRedirect();
  return (
    <>
    <Header/>
      <Router/>
    </>
  );
}

export default App;
