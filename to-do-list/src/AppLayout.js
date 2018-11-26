import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link} from 'react-router-dom';
import Routes from './Routes';

const { Header, Content, Footer } = Layout;



class AppLayout extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[window.location.pathname]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="/">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="/todolist">
                            <Link to="/todolist">Todo List</Link>
                        </Menu.Item>                       
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 750, marginTop:20 }}>
                        <Routes/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}

export default AppLayout;