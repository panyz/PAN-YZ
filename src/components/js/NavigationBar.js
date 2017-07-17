import React, {Component} from 'react';
import '../css/NavigationBar.css';

import {Avatar, Button, Menu, Icon, Col} from 'antd';

export default class NavigationBar extends Component {

    render() {
        return (
            <div id="container">
                <Avatar
                    style={{margin: 10}}
                    size="large"
                    src="https://avatars5.githubusercontent.com/u/20178835?v=4&u=73dea8a3ff407ab131e8c8edf1fe904e43d3a167&s=400"/>
                {/*<Button id="btn" type="dashed" icon="rocket" />*/}
                {/*<Button id="btn" type="dashed"  icon="compass"/>*/}
                {/*<Button id="btn" type="dashed" icon="idcard"/>*/}
                <div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        id="btn"
                        mode="horizontal"
                        theme='dark'
                        inlineCollapsed={true}
                    >
                        <Menu.Item key="1">
                            <Icon type="rocket"/>
                            <span>主页</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="compass"/>
                            <span>博客</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="idcard"/>
                            <span>关于我</span>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}
