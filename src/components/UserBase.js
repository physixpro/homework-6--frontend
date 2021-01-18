import React, {useState} from 'react'
import axios from 'axios'


const UserBase = () => {

    const[userName,setUserName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[passwordTwo,setPasswordTwo] = useState("")

    const recordUserName = (e) => {
        setUserName(e.target.value)
    }

    const recordEmail = (e) => {
        setEmail(e.target.value)
    }

    const recordPassword = (e) => {
        setPassword(e.target.value)
    }

    const recordPasswordTwo = (e) => {
        setPasswordTwo(e.target.value)
    }

const addNewUser = async (e) => {
    e.preventDefault()
    const newUser = {
        userName: userName,
        email: email,
        password: password,
        passwordTwo: passwordTwo
    }
  const res = await  axios.post('http://localhost:3001/users', newUser )
  console.log(res)

  setUserName("")
  setEmail("")
  setPassword("")
  setPasswordTwo("")
}

    return(
        <div>
<form onSubmit = {addNewUser}>
    Username:<input type="text" name="username" placeholder="username" onChange={recordUserName} value={userName}/>
    Email:<input type="email" name="email" placeholder="email address" onChange={recordEmail} value={email}/>
    Password:<input type="password" name="password-one" placeholder="password" onChange={recordPassword} value={password}/>
    Confirm Password<input type="password" name="password-two" placeholder="confirm password" onChange={recordPasswordTwo} value={passwordTwo}/>
    <button type="submit">Sign Up</button>
</form>
        </div>
    )
}

export default UserBase;