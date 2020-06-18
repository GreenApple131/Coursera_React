import { DISHES } from '../shared/dishes'; // дані про страви(назва, ціна, опис...)
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';


export const initialState = { // initial configuration for state
	dishes: DISHES,
	comments: COMMENTS,
	leaders: LEADERS,
	promotions: PROMOTIONS
};

// first reduser function
export const Reducer = (state = initialState, action) => {
	return state;
};