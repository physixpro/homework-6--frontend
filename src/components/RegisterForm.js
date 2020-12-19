import React, {useState} from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap';

function RegisterForm (){

//store the information that the user typed into the input
    
//grab the information that the user typed into the input 

// Make the post request with the information that the user typed into the input
    return(
        <form>
            <input type='email' name='email' placeholder = 'email' />
            <input type="password" name="password" placeholder="enter your password here"/>
            <button type="submit">Register</button>
        </form>

        
    )
}

export default RegisterForm;

