import React, {Component} from 'react';
import './App.css';
import {Row, Col} from 'antd';

class App extends Component {

    render() {
        return (
            <div id="box">
                <Row>
                    <Col xs={24} sm={24} md={0} lg={0} id="box">
                        <div style={{height:50}} id="box1">Col</div>
                    </Col>
                </Row>
                <Row id="box">
                    <Col xs={0} sm={0} md={2} lg={2} id="box">
                        <div style={{width:50}} id="box1">Col</div>
                    </Col>
                    <Col xs={24} sm={24} md={22} lg={22} id="box">
                        <div id="box2">Col</div>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default App;
