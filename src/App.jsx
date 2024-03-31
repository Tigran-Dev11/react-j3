
<<<<<<< HEAD
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Tudulist from "./pages/Todo/tudu";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
=======

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Router from "./routes/routes";
>>>>>>> 4769f1a41189e52e0dec03f8fc132891dc229628


function App() {
  return(
<<<<<<< HEAD
    <Router>
 <div  className=""> 
=======
<>
>>>>>>> 4769f1a41189e52e0dec03f8fc132891dc229628
<Header/>
<Router/>
<Footer/>
<<<<<<< HEAD
<Tudulist/>
<Switch>
          <Route path="/login" component={Login} />
          
        </Switch>
</div>
</Router>
=======
</>

>>>>>>> 4769f1a41189e52e0dec03f8fc132891dc229628
  );
};

export default App;