import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import user from './user';
import navOption from './navOption';

const rootReducer = combineReducers({
  user,
  navOption,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
