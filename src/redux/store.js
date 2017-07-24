import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import weatherReducer from "./weather"

const reducer = combineReducers({
  weatherReducer: weatherReducer
})

export default createStore(
  reducer,
  applyMiddleware(reduxPromiseMiddleware())
);