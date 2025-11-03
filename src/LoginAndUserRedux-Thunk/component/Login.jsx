import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { fakeLogin } from "../../redux-thunk/action";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userlogined = useSelector((state) => state.userlogined);
    const [user, setUser] = useState({ username: "", password: "" });

    const setValueForUser = (key, value) => {
        setUser({
            ...user,
            [key]: value
        });
    }

    const login = () => {
        dispatch(fakeLogin(user));
    };

    useEffect(() => {
        if (userlogined && userlogined.username) {
            navigate("/users");
        }
    }, [userlogined, navigate]);

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Đăng nhập</h2>
                <div className="form-group">
                    <label>Tên đăng nhập</label>
                    <input
                        type="text"
                        placeholder="Nhập tên đăng nhập"
                        onChange={(e) => setValueForUser("username", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        onChange={(e) => setValueForUser("password", e.target.value)}
                    />
                </div>
                <div>
                    <button className="login-button" onClick={login}>Đăng nhập</button>
                </div>
                <div>
                    Sử dụng: admin / 123
                    sử dụng sướng lắm
                </div>
            </div>
        </div>
    );
}