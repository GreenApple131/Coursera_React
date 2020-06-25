import * as ActionTypes from './ActionTypes';

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