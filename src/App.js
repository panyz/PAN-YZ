import React, {Component} from 'react';
import './App.css';
import {Row, Col, Button, Carousel} from 'antd';
import NavigationBar from './components/js/NavigationBar';
import TopNavBar from './components/js/TopNavBar';

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
                                <span role="img">🤙</span>Yo What's up...<span role="img">🤘</span>This is PAN-YZ
                            </span>
                            <hr style={{width: 400, border: '1px solid #108EE9'}}/>
                            {/*<span id="text-title" style={{fontSize: 'xx-large'}}>我是panyz</span>*/}
                            <Carousel vertical autoplay={true} centerMode={true}>
                                <div><h3>1</h3></div>
                                <div><h3>2</h3></div>
                                <div><h3>3</h3></div>
                            </Carousel>

                            <span id="text-title" style={{marginTop: 20, fontSize: 'small'}}>Android开发工程师 - 野生程序员</span>

                            <div style={{marginTop: 100}}>
                                <Button type="primary"
                                        ghost
                                        style={{fontSize: 15, color: '#ffffff', borderRadius: 20, margin: 20}}>
                                    <a href="https://github.com/panyz/Blogs/issues">我的博客</a>
                                </Button>
                                <Button type="primary"
                                        ghost
                                        style={{fontSize: 15, color: '#ffffff', borderRadius: 20, margin: 20}}>
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
