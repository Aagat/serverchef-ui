import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

import './App.css';
import TopMenu from './components/ui/TopMenu';
import SideMenu from './components/ui/SideMenu';

import Overview from './Overview';

const routes = [
    {
        path: "/",
        component: Overview,
        exact: true
    },
    {
        path: "/overview",
        component: Overview,
        exact: true
    }
]

class App extends Component {

    render() {
      return (
          <Layout>
              <Header style={{ background: '#fff' }}>
                  <TopMenu/>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                  <Layout style={{ padding: '24px 0', background: '#fff', margin: '24px 0' }}>
                      <Sider width={200} style={{ background: '#fff' }}>
                          <SideMenu/>
                      </Sider>
                      <Content style={{ padding: '0 24px', minHeight: 280 }}>
                          {routes.map((route, i) => {
                               return (<Route key={i} {...route}/>);
                           })}
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
