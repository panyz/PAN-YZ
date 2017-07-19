import React, {Component} from 'react';

export default class CarouselText extends Component {
    state = {
        text: ["我是panyz", "欢迎大佬莅临指导", "编程,JUST FOR FUN"],
        index: 0
    };

    componentDidMount() {
        let i = 0;
        this.timer = setInterval(() => {
            if (i > 2) {
                i = 0;
            }
            this.setState({
                index: i
            });
            i++;
        }, 2000);
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <span style={{color: '#F5F5F5', fontWeight: 'bold', fontSize: 'xx-large'}}>
                    {this.state.text[this.state.index]}
                    </span>
            </div>
        )
    }
}