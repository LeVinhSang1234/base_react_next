import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

// const middleware = (store: any) => (next: any) => (action: any) => {
//   console.log(store.getState(), action);
//   return next(action);
// };

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
