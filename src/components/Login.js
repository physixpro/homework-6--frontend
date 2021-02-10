import React, { useState } from "react";

const Login = () => {
  return (
      
    <form onSubmit>
      <h2>Login</h2>
      {/* ERROR! */}
      <div>
        <label>Name:</label>
        <input type="text" name="name" placeholder="name" />
      </div>
      <div>
        <labe>Email:</labe>
        <input type="email" name="email" placeholder="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" placeholder="password" />
      </div>
      <button type="submit">Log-In</button>
    </form>
  );
};

export default Login;
