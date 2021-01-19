import React, { useState } from "react";
import axios from "axios";

const FetchUsers = () => {


  /* state for hidding the database */

  const[hideDb,setHideDb] = useState(true)

  const [users, setUsers] = useState([]);


  
    const viewUsers = async () => {
      /* we set database to be shown because its false */
      setHideDb(false)
        const res = await axios.get("http://localhost:3001/users/");
        const users = res.data;
        setUsers(users);
        console.log(hideDb)
        if(hideDb === false){
         setHideDb(true)
        }
      } 

  
  return (
    <div>
      <h1>User Database</h1>
      <button onClick={viewUsers}>View Database</button>   
      {hideDb ? null : 
      users.map((user) => (
        <ul key={user._id}>
          <li>{user.occupation}</li>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.password}</li>
          <li>{user.passwordTwo}</li>
          <li>{user.name}</li>
        </ul>
      ))
      
      }
      
    
    </div>
  );
};
export default FetchUsers;
