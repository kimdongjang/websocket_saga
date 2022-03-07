import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger';

import RootReducer from "./reducers/RootReducer";
import WatcherSaga from "./saga/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware,logger));

sagaMiddleware.run(WatcherSaga);

export default store;