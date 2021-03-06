import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HeroPage from './pages/HeroPage/heroPage';
import './normalize.css';
import LoginPage from './pages/LoginPage/loginPage';
import { Provider }from 'react-redux';
import Store from './redux/Store/store';
import SearchPage from './pages/SearchPage/searchPage';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <Route exact path='/' component={HeroPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/search' component={SearchPage} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
