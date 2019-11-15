import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

class Nav extends Component {
    render(){
        const { Header } = Layout;
        return(
            <Header>
                <h1 className="logo">Google Books Search</h1>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px', overflow: 'hidden' }}
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
        )
    }
}

export default Nav;