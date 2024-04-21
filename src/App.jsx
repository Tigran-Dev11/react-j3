import { useLanguageRedirect } from "./hooks/use-language";
import Router from "./routes/route";

function App() {
  useLanguageRedirect();
  return (
    <>
      <Router />
    </>
  );
}

export default App;
