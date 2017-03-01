import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class SideMenu extends Component {
    render() {
        return (
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
                    <Menu.Item key='7'>
                        <Icon type="file-text" />
                        <span>Logs</span>
                    </Menu.Item>
                    <Menu.Item key='8'>
                        <Icon type="setting" />
                        <span>Settings</span>
                    </Menu.Item>
                </Menu>
        );
    }
}

export default SideMenu;
