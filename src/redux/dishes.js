import { DISHES } from '../shared/dishes'; // дані про страви(назва, ціна, опис...)


export const Dishes = (state = DISHES, action) => {
	switch(action.type) {
		default:
			return state;
	}
}