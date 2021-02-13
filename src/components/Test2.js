import React, { useState, useEffect } from "react";
import axios from "axios";

const Test2 = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const recordName = (e) => {
    setName(e.target.value);
    console.log(e.target.value)
  };
  const recordEmail = (e) => {
    setEmail(e.target.value);
  };

  const recordPassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:3001/feed/");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);


const registerUser = async (e) => {
    e.preventDefault()
    const newUser = {
        name: name,
        email: email,
        password: password
    }
    const res = await axios.post("http://localhost:3001/feed", newUser)
    setName(" ")
    setEmail("")
    setPassword("")
  console.log(res) 
}

  return (
    <div>
      <form onSubmit={registerUser}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={recordName}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={recordEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="@#T455"
          value={password}
          onChange={recordPassword}
        />
        <button type="submit">Register</button>
      </form>
      {users.map((user) => (
        <ul key={user._id}>
          <li>{user.user_id}</li>
          <li>{user.status}</li>
          <li>{user.description}</li>
          <li>{user.sex}</li>
        </ul>
      ))}
    </div>
  );
};

export default Test2;
