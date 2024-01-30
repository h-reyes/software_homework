// App.js
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Stock from './components/Stock';

const App = () => {
  return (
    <Router>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/stocks">Stocks</NavLink>
      </nav>

      <Routes>
        <Route path="/about" component={About} />
        <Route path="/stocks/:symbol" component={Stock} />
        <Route path="/stocks" component={Dashboard} />
        <Route path="/" exact component={Home} />
      </Routes>
    </Router>
  );
};

export default App;
