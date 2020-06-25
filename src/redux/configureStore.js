import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({  // combineReducers збирає усі reducers разом з різних файлів в один 
			dishes: Dishes,
			comments: Comments,
			promotions: Promotions,
			leaders: Leaders
		})
	);

	return store;
}