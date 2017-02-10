import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from "../components/header/header.js"

const App = ({ children, home }) => (
    <section className="wrapper">
        <Header home={home}></Header>
        { children }
    </section>
)

const mapStateToProps = state => ({
    home: state.home,
    user: state.user
})

export default connect(
    mapStateToProps,
    { }
)(App);
