import React, {Component} from 'react'
import { connect } from 'react-redux'

const Home = ({ model }) => (
    <div className="home-view">
    </div>
)

const mapStateToProps = state => ({
	model: state.model
})

export default connect(
	mapStateToProps
)(Home)
