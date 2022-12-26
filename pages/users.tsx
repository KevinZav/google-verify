import { useEffect, useState } from "react";
import axios from 'axios';

interface IUsers {
  email: string;
  password: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<IUsers[]>([
    { email: "testing@test.com", password: "hola" },
  ]);

  useEffect(() => {
    axios.get('/api/users').then(resp => {
      const {users} = resp.data;
      setUsers(users);
    });
  }, []);

  return (
    <div className="container m-5">
      {users.map((user, key) => (
        <div className="columns m-5" key={`user-${key}`}>
          <div className="notification is-link" style={{ width: "100%" }}>
            <button className="delete"></button>
            <span className="has-text-weight-bold"> Email:</span> {user.email}
            <br />
            <span className="has-text-weight-bold"> Password:</span>{" "}
            {user.password}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
