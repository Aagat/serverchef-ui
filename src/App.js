import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

import './App.css';

class App extends Component {
  state = {
      collapsed: true,
      mode: 'inline'
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          collapsible
            collapsed={this.state.collapsed}
            onCollapse={ this.toggle }
        >
          <div className="logo" />
          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span className="nav-text">Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="switcher" />
              <span className="nav-text">Projects</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="hdd" />
              <span className="nav-text">Database</span>
            </Menu.Item>
            <Menu.Item key="4">
                <Icon type="mail" />
                <span className="nav-text">Email</span>
            </Menu.Item>
            <Menu.Item key="5">
                <Icon type="solution" />
                <span className="nav-text">Snippets</span>
            </Menu.Item>
<Menu.Item key="6">
                <Icon type="book" />
                <span className="nav-text">Documentation</span>
</Menu.Item>
<Menu.Item key="7">
                <Icon type="setting" />
                <span className="nav-text">Settings</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 480 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
