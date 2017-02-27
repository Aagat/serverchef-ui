import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

import './App.css';

class App extends Component {
  state = {
      mode: 'horizontal'
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
      return (
          <Layout>
              <Header>
                  <Menu
                      theme='dark'
                      mode='horizontal'
                      defaultSelectedKeys={['1']}
                      style={{ lineHeight: '64px' }} >
                        <Menu.Item key='1'>Item</Menu.Item>
                        <Menu.Item key='2'>Item</Menu.Item>
                  </Menu>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                  <Layout style={{ padding: '24px 0', background: '#fff', margin: '24px 0' }}>
                      <Sider width={200} style={{ background: '#fff' }}>
                          <Menu
                              mode='inline'
                              defaultSelectedKeys={['1']}
                              style={{ height: '100%' }} >
                              <Menu.Item key='1'>
                                  <Icon type="line-chart" />
                                  <span>Overview</span>
                              </Menu.Item>
                              <Menu.Item key='2'>
                                  <Icon type="code-o" />
                                  <span>Runtime</span>
                              </Menu.Item>
                              <Menu.Item key='3'>
                                  <Icon type="hdd" />
                                  <span>Database</span>
                              </Menu.Item>
                              <Menu.Item key='4'>
                                  <Icon type="select" />
                                  <span>Utilities</span>
                              </Menu.Item>
                              <Menu.Item key='5'>
                                  <Icon type="link" />
                                  <span>Network</span>
                              </Menu.Item>
                              <Menu.Item key='6'>
                                  <Icon type="setting" />
                                  <span>Settings</span>
                              </Menu.Item>
                          </Menu>
                      </Sider>
                      <Content style={{ padding: '0 24px', minHeight: 280 }}>
                          Content
                      </Content>
                  </Layout>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                &copy; Serverchef
              </Footer>
          </Layout>
    );
  }
}

export default App;
