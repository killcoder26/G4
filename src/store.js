import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import {sagaWatcher , sagaWatcher2, sagaWatcher3} from './saga/index.js';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middleWares));
sagaMiddleware.run(sagaWatcher);
sagaMiddleware.run(sagaWatcher2);
sagaMiddleware.run(sagaWatcher3);
export default store;