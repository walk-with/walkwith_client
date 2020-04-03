import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import user from './user';
import navOption from './navOption';
import walk from './walk';

const rootReducer = combineReducers({
  user,
  navOption,
  walk,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
