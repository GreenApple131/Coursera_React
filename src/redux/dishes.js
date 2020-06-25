import * as ActionTypes from './ActionTypes';


export const Dishes = (state = {
	isLoading: true,
	errMess: null,
	dishes:[]
}, action) => {
	switch(action.type) {
		case ActionTypes.ADD_DISHES:
			return {...state, isLoading: false, errMess: null, dishes: action.payload}  // береться об'єкт state і ту, що знаходиться після коми модифікує його і повертає цей содифікований об'єкт


		case ActionTypes.DISHES_LOADING:
			return {...state, isLoading: true, errMess: null, dishes: []}  // береться об'єкт state і ту, що знаходиться після коми модифікує його і повертає цей содифікований об'єкт

		case ActionTypes.DISHES_FAILED:
			return {...state, isLoading: false, errMess: action.payload, dishes: []}  // береться об'єкт state і ту, що знаходиться після коми модифікує його і повертає цей содифікований об'єкт



		default:
			return state;
	}
}