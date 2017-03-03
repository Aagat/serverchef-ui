import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const icons = [
    'line-chart',
    'code-o',
    'reload',
    'hdd',
    'select',
    'link',
    'file-text',
    'setting'
];

class SideMenu extends Component {
    render() {
        return (
                <Menu
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    style={{ height: '100%' }} >
                {this.props.routes.map((route, i) => {
                    return (
                            <Menu.Item key={i+1}>
                            <Link to={route.path}>
                                <Icon type={icons[i]}/>
                                <span>{route.component.name}</span>
                            </Link>
                            </Menu.Item>
                    );
                })
                }
            </Menu>
        );
    }
}

export default SideMenu;
