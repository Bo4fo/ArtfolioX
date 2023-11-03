import '../src/Maincss/App.css';
import Navbar from "./Components/Navbar";
import Home from './Pages/Explore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Components from './Pages/Components';




function App() {

  return (
    <Router>
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
            <Route path="/Services" Components={Blog}>
              <Blog />
            </Route>
            <Route path="/Services" Components={Components}>
              <Components />
            </Route>
            {/* <Route path="/Services" Components={Services}>
              <Services />
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
