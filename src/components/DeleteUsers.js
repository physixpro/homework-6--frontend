import React, {useState} from 'react'
import axios from 'axios'

const DeleteUsers = () => {


   
    const[remove,setRemove] = useState("")

    const[removeButton,setRemoveButton] = useState("")

    const recordUser = (e) => {
        setRemoveButton(e.target.value)
    }

    const deleteUser = async () =>  {
        const res = await axios.delete("http://localhost:3001/users/:userId/")
        const removeUser = res.data
        setRemove(remove)
        console.log(removeUser)
      }
    return(
        <div>
<form onSubmit={deleteUser}>
    <input type="text" name="user" placeholder="user" onChange={recordUser} value={removeButton}/>
    <button type="submit">Delete User</button>
</form>
        </div>
    )
}
export default DeleteUsers;