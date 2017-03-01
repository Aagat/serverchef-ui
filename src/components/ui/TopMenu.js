import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class TopMenu extends Component {
    render() {
        return (
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
        );
    }
}

export default TopMenu;
