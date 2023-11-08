import '../src/Maincss/App.css';
import Navbar from "./Components/Navbar";
import Home from './Pages/Explore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Components from './Pages/Components';




function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="Home">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Services" Components={Services}>
              <Services />
            </Route>
            <Route path="/Contact" Components={Contact}>
              <Contact />
            </Route>
            <Route path="/Blog" Components={Blog}>
              <Blog />
            </Route>
            <Route path="/Components" Components={Components}>
              <Components />
            </Route>
            {/* <Route path="/Services" Components={Services}>
              <Services />
            </Route> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
