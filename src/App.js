import React, {Component} from 'react';
import './App.css';
import {Row, Col, Button} from 'antd';
import NavigationBar from './components/js/NavigationBar';
import TopNavBar from './components/js/TopNavBar';
import CarouselText from './components/js/CarouselText';

class App extends Component {

    render() {
        return (
            <div id="box">

                <Row id="box">
                    <Col xs={24} sm={24} md={0} lg={0} id="topNav">
                        <TopNavBar/>
                    </Col>
                    <Col xs={0} sm={0} md={1} lg={1} id="box">
                        <NavigationBar/>
                    </Col>
                    <Col xs={24} sm={24} md={22} lg={22} id="box">
                        <div id="content">

                            <span id="text-title">
                                <span id="visiable-text" role="img">🤙Yo What's up...</span>
                                <span role="img">🤘This is PAN-YZ</span>
                            </span>

                            <hr/>

                            <CarouselText/>

                            <span id="text-title" style={{marginTop: 20, fontSize: 'small'}}>
                                <span style={{color: '#108EE9'}}>Android</span>工程师 - <span style={{color: '#108EE9'}}>伪前端</span>工程师
                            </span>

                            <div style={{marginTop: 100}}>
                                <Button type="primary"
                                        ghost
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                            color: '#ffffff',
                                            borderRadius: 20,
                                            margin: 20
                                        }}>
                                    <a href="https://github.com/panyz/Blogs/issues">我的博客</a>
                                </Button>
                                <Button type="primary"
                                        ghost
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                            color: '#ffffff',
                                            borderRadius: 20,
                                            margin: 20
                                        }}>
                                    关于我
                                </Button>
                            </div>

                        </div>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default App;
