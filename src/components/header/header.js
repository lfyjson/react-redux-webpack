import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        let { home } = this.props;

        return (
            <div>
                <div className="top-bar">
                { home === 'leave' ? <Link to="/" className="return-btn"><span></span></Link>: null }
                    首页
                </div>
                <div className="header-pic"></div>
            </div>
        );
    }
}
