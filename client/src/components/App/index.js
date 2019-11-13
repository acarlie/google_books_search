import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// antd
import { Layout } from 'antd';
import './App.css';

//Pages
import Home from '../../pages/Home';
import Saved from '../../pages/Saved';
import Book from '../../pages/Book';
import Nav from '../Nav';
import NoMatch from '../../pages/NoMatch';


function App() {
  const { Content, Footer } = Layout;

  return (
    <Router>
      <Layout className="layout">
        <Nav />

        <Content style={{ padding: '0 50px', minHeight: '100vh' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
              <Route exact path="/books/:id" component={Book} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Footer Here</Footer>
      </Layout>
    </Router>
  );
}

export default App;
