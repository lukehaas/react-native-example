import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducers, { initialState } from './reducers';


export const reducers = combineReducers(
  rootReducers,
);

export default createStore(reducers, initialState, applyMiddleware(thunk));
