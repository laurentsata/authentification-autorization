// import GoHomeButton from "@components/GoHomeButton";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
      .then((response) => response.data)
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      {/* <GoHomeButton /> */}

      <div className="bloc-admin">
        <h2>Liste des utilisateurs</h2>
        <table>
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <div className="admin-mail">
                    <td className="admin-m">{user.email}</td>
                  </div>
                  <div className="admin-bol">
                    <td>{user.isAdmin}</td>
                  </div>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
