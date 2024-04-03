import { UserProvider } from "./providers/user-provider";
import Router from "./routes/router";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
