import React, { useState,useEffect } from "react";
import axios from "axios";

const FetchUsers = () => {


  /* state for hidding the database */

  // const[hideDb,setHideDb] = useState(true)

  const [users, setUsers] = useState([]);


  useEffect(() => {
    const viewUsers = async () => {
      /* we set database to be shown because its false */
      // setHideDb(false)
        const res = await axios.get("http://localhost:3001/feed");
         setUsers(res.data)
     
        // console.log(hideDb)
        // if(hideDb === false){
        //  setHideDb(true)
        // }
      } 
      viewUsers()


  },[])
    

  
  return (
  
      <div>
            {
                users.map((user) => (
                    <div key={user._id}>
                        <p>{user.name}</p>
                    </div>
                ))
            }
        </div>
  );
};
export default FetchUsers;
