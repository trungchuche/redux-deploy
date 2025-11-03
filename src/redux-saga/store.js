import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./userSaga";
// Luồng redux login/user bước1: khởi tạo store
// Tạo saga middleware
// Luồng store được khởi tạo bước2: để xử lý side effects API
const sagaMiddleware = createSagaMiddleware();

// tạo store với saga middleware
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

// Chạy saga
sagaMiddleware.run(rootSaga);

export default store;