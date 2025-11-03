import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import User from "./component/User";
import { Provider } from "react-redux";
import store from "../redux-thunk/store";
export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/users" element={<User />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}