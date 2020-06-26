import * as ActionTypes from './ActionTypes';

export const Promotions = (state = {
		isLoading: true,
		errMess: null,
		promotions:[]
	}, action) => {
	switch(action.type) {
		case ActionTypes.ADD_PROMOS:
			return {...state, isLoading: false, errMess: null, promotions: action.payload}  // береться об'єкт state і ту, що знаходиться після коми модифікує його і повертає цей содифікований об'єкт


		case ActionTypes.PROMOS_LOADING:
			return {...state, isLoading: true, errMess: null, promotions: []}  // береться об'єкт state і ту, що знаходиться після коми модифікує його і повертає цей содифікований об'єкт

		case ActionTypes.PROMOS_FAILED:
			return {...state, isLoading: false, errMess: action.payload, promotions: []}  // береться об'єкт state і ту, що знаходиться після коми модифікує його і повертає цей содифікований об'єкт

		default:
			return state;
	}
}