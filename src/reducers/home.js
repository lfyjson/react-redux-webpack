import {  RECEIVE_ENTER_LEAVE_HOME } from '../constants/ActionTypes'

const home = (state = 'leave', action ) => {
	switch(action.type) {
		case RECEIVE_ENTER_LEAVE_HOME:
			return action.state
		default:
			return state;
	}
}

export default home;