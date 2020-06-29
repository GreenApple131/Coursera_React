import * as ActionTypes from './ActionTypes';


export const Leaders = (state = { 
		isLoading: true,
		errMess: null,
		leaders:[]
	}, action) => {
	switch(action.type) {
		case ActionTypes.ADD_LEADERS:
			return {...state, isLoading: false, errMess: null, leaders: action.payload}  // береться об'єкт state і ту, що знаходиться після коми модифікує його і повертає цей содифікований об'єкт

		case ActionTypes.LEADERS_LOADING:
			return {...state, isLoading: true, errMess: null, leaders: []}  // береться об'єкт state і ту, що знаходиться після коми модифікує його і повертає цей содифікований об'єкт

		case ActionTypes.LEADERS_FAILED:
			return {...state, isLoading: false, errMess: action.payload, leaders: []}  // береться об'єкт state і ту, що знаходиться після коми модифікує його і повертає цей содифікований об'єкт

		default:
			return state;
	}
}
