import React, {Component} from 'react';

export default class CarouselText extends Component{
    state = {
        text: ["我是panyz","一位闷骚的程序员","编程,JUST FOR FUN(ง •_•)ง"],
        index:0
    };

    componentDidMount(){
        let i = 0;
        this.timer = setInterval(() => {
            if (i>2) {
                i = 0;
            }
            this.setState({
                index:i
            });
            i++;
        }, 1500);
    }

    componentWillUnmount(){
        this.timer && clearInterval(this.timer);
    }

    render(){
        return(
            <div>
                <span style={{color:'#F5F5F5',fontWeight:'bold', fontSize:'xx-large'}}>{this.state.text[this.state.index]}</span>
            </div>
        )
    }
}