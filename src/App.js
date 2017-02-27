import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

import './App.css';

class App extends Component {
    render() {
      return (
          <Layout>
              <Header style={{ background: '#fff' }}>
                  <Menu
                      theme='light'
                      mode='horizontal'
                      defaultSelectedKeys={['serverchef']}
                      style={{ lineHeight: '64px', float: 'right' }} >
                      <SubMenu key='projects'
                               title={<span>serverchef.io &nbsp;<Icon type="down"/></span>}>
                          <Menu.Item key='serverchef'>serverchef.io</Menu.Item>
                          <Menu.Item key='aagat'>aagat.com</Menu.Item>
                      </SubMenu>
                      <SubMenu key='user'
                               title={<span><Icon type="poweroff"/></span>}>
                          <Menu.Item key='1'><Icon type="poweroff"/>Shutdown</Menu.Item>
                          <Menu.Item key='2'><Icon type="reload"/>Restart</Menu.Item>
                      </SubMenu>
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
