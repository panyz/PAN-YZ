import React, {Component} from 'react';
import './App.css';
import {Row, Col} from 'antd';
import NavigationBar from './components/js/NavigationBar';

class App extends Component {

    render() {
        return (
            <div id="box">
                <Row>
                    <Col xs={24} sm={24} md={0} lg={0} id="box">
                        <NavigationBar/>
                    </Col>
                </Row>
                <Row id="box">
                    <Col xs={0} sm={0} md={2} lg={2} id="box">
                        <NavigationBar/>
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
