import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// antd
import { Layout, Menu } from 'antd';
import './App.css';

//Pages
import Home from './components/pages/Home';
import Saved from './components/pages/Saved';
import Book from './components/pages/Book';
import Nav from './components/Nav';
import NoMatch from './components/pages/NoMatch';


function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              Home
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              Saved
              <Link to="/saved" />
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
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
