import logo from './logo.svg';
import Reacts from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/reception' exact Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
