import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

//Pages
import Home from './components/pages/Home';
import Saved from './components/pages/Saved';
import Book from './components/pages/Book';
import Nav from './components/Nav';
import NoMatch from './components/pages/NoMatch';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/books/:id" component={Book} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
