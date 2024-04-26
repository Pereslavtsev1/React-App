import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from '../src/Pages/Home'
import Services from '../src/Pages/Services'
import Products from '../src/Pages/Products'
import SignUp from '../src/Pages/SignUp'
import './styles/App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/services' exact Component={Services}/>
        <Route path='/sign-up' exact Component={SignUp}/>
        <Route path='/products' exact Component={Products}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
