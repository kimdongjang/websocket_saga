import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import RootReducer from "./reducers/RootReducer";
import WatcherSaga from "./saga/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(WatcherSaga);

export default store;