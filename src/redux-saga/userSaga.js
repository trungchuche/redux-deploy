import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from "./action";

const BASE_URL = "https://jsonplaceholder.typicode.com";

function* getUser() {
    try {
        const response = yield axios.get(`${BASE_URL}/users`);
        yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

function* authSagaFun(action) {
    const user = action.payload;
    if (user.username === "admin" && user.password === "letmein") {
        yield put({ type: LOGIN_SUCCESS, payload: user });
        yield put({ type: FETCH_USER, payload: {} });
    } else {
        yield put({
            type: LOGIN_ERROR,
            payload: "Tên người dùng hoặc mật khẩu không đúng"
        });
    }
}

// Luồng store được khởi tạo bước3: để lắng nghe actions
export default function* rootSaga() {
    yield takeLatest(LOGIN, authSagaFun);
    yield takeLatest(FETCH_USER, getUser);
}

