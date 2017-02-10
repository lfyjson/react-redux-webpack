import * as types from '../constants/ActionTypes'

export const enterHome = () => ( { type: types.RECEIVE_ENTER_LEAVE_HOME, state: 'enter' } )
export const leaveHome = () => ( { type: types.RECEIVE_ENTER_LEAVE_HOME, state: 'leave' } )
