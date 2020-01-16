import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import user from './user';

const store = createStore(user, applyMiddleware(thunk));

export default store;
