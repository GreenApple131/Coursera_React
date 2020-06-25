import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes'; // дані про страви(назва, ціна, опис...)


export const addComment = (dishId, rating, author, comment) => ({
	// every action object should contain a type
	type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
	} 
});

export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading(true));

	setTimeout(() => {
		dispatch(addDishes(DISHES));
	}, 2000) // виконується функція після затримки в 2000 мілісекунд

}

export const dishesLoading = () => ({
	type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
	type: ActionTypes.DISHES_FAILED,
	payload: errmess
});

export const addDishes = (dishes) => ({
	type: ActionTypes.ADD_DISHES,
	payload: dishes
});