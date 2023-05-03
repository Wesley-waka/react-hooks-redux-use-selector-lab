import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.users);
  const numUsers = users.length;
  const mappedUsers = () => {
    return users.map((user, index) =>
      (<li key={index}>{user.username}</li>)
    );
  };
  return (
    <div>
      <h2>Users {numUsers}</h2>
      <ul>
        {mappedUsers()}
      </ul>
    </div>
  );
}

export default Users;
