import * as ActionTypes from './ActionTypes';

export const Comments = (state = { 
        errMess: null, 
        comments: [] 
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, isLoading: false, errMess: null, comments: action.payload }  // береться об'єкт state і ту, що знаходиться після коми модифікує його і повертає цей содифікований об'єкт

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, comments: []}  // береться об'єкт state і ту, що знаходиться після коми модифікує його і повертає цей содифікований об'єкт

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return { ...state, comments: state.comments.concat(comment) };

        default:
          return state;
      }
};