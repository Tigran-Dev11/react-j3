
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Tudulist from "./pages/Todo/tudu";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';


function App() {
  return(
    <Router>
 <div  className=""> 
<Header/>
<Router/>
<Footer/>
<Tudulist/>
<Switch>
          <Route path="/login" component={Login} />
          
        </Switch>
</div>
</Router>
  );
};

export default App;