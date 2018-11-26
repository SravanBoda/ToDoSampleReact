import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link} from 'react-router-dom';
import HomePage from '../components/Home/Home';
import TodoListPage from '../pages/TodoListPage';


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
                        defaultSelectedKeys={['/']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="/">
                            <a href="/">Home</a>
                        </Menu.Item>
                        <Menu.Item key="/todolist">
                            <a href="/todolist">Todo List</a>
                        </Menu.Item>                       
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 750, marginTop:20 }}><TodoListPage/></div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}

export default AppLayout;