import {combineReducers} from 'redux';
import LenovoReducer from './lenovo';
import SamsungReducer from './samsung';
import CartLaptopsReducers from './cartLaptops';
import users from './users';
import flashMessages from './flashMessages';
import auth from './auth';

const rootReducer = combineReducers({
	lenovo: LenovoReducer,
	samsung: SamsungReducer,
	cartLaptops: CartLaptopsReducers,
	flashMessages,
	auth,
	users
}); 

export default rootReducer