import { useSelector } from "react-redux";
import "./User.css";

export default function User() {
    const users = useSelector((state) => state.users);

    return (
        <div className="user-container">
            <div className="user-content">
                <h2 className="user-title">Danh sách người dùng</h2>

                <div className="table-container">
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Email</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {users.length === 0 && (
                    <div className="no-user-message">Chưa có người dùng nào</div>
                )}
            </div>
        </div>
    );
}