import {createStore , applyMiddleware} from 'redux';
import RootReducers from './reducers';
import thunk from 'redux-thunk';

export const middlewares = [thunk];

export const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);   //new syntax

export const store = createStoreWithMiddleWare(RootReducers);