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
                                  Hello world
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
