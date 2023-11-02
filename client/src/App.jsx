import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/Home';
import Rewards from './pages/Rewards/Rewards';
import Recipes from './pages/Recipes/Recipes';
import Map from './pages/Map/Map';


function App() {
  return (
    <>
    <div className="App">

    <Navbar className="custom-navbar-class">

    </Navbar>

    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Map" element={<Map />} />
        </Routes>
      </div>
    </Router>


     
    </div>
    </>
  );
}

export default App;
