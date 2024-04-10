
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Login from "./routes/login";
 import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
 function App() {
  return (
<div>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/project" element={<Project/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/login" element={<Login/>}/>

</Routes>

    </div>
  );
}

export default App;
