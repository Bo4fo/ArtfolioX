import '../src/Maincss/App.css';
import Navbar from "./Components/Navbar";
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Home">
        <Home />
      </div>
    </div>
  );
}

export default App;
