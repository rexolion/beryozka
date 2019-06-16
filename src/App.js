import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HeroPage from './pages/HeroPage/heroPage';
import './normalize.css';
import LoginPage from './pages/LoginPage/loginPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={HeroPage} />
      <Route exact path='/login' component={LoginPage} />
    </div>
    </Router>
  );
}

export default App;
