import React, { useState } from "react";
import axios from "axios";

const FetchUsers = () => {

  const [users, setUsers] = useState([]);


  
    const viewUsers = async () => {
        const res = await axios.get("http://localhost:3001/users/");
        const users = res.data;
        setUsers(users);
        console.log(res)
      }

  
  return (
    <div>
      <h1>User Database</h1>
      <button onClick={viewUsers}>View Database</button>   
      {users.map((user) => (
        <ul key={user._id}>
          <li>{user.occupation}</li>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.password}</li>
          <li>{user.passwordTwo}</li>
          <li>{user.name}</li>
        </ul>
      ))}
    
    </div>
  );
};
export default FetchUsers;
