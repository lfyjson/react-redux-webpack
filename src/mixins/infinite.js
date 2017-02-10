import React from 'react'

// 注意这里传入一个React组件然后返回一个React组件
let self;
export default ComposedComponent => class extends React.Component {
    constructor(props) {
        super(props);
        self = this;
        this.bScroll = true;
    }

    componentWillMount () {
        this.onScroll();
    }
 
    componentWillUnmount () {
        this.unOnScroll();
    }

    onScroll () {
       window.addEventListener('scroll', this.scrollHandler, false);
    }

    unOnScroll () {
        window.removeEventListener('scroll', this.scrollHandler, false);
    }

    scrollHandler () {
        var maxScrollTop = document.body.scrollHeight - window.innerHeight;
        if(document.body.scrollTop >= maxScrollTop - window.innerHeight / 3 && self.bScroll && !self.props.loaded) {
            self.bScroll = false;
            self.props.requestHandler().then(() => {
                self.bScroll = true;
            });
        }
    }

    loadingStyle() {
        return {
            "color": "rgba(255, 255, 255, 0.5)",
            "fontSize": "0.4rem",
            "textAlign": "center",
            "margin": "0.4rem 0"
        }
    }

    render() {
        return (
            <div>
                <ComposedComponent ref="composed" {...this.props} {...this.state}/>
                <div style={this.loadingStyle()}>{this.props.loaded ? '加载完毕' : '正在加载中...'}</div>
            </div>
        )
    }
};