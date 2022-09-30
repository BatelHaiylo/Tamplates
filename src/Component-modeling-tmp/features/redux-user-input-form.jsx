import React, { useState } from "react";
import { connect } from 'react-redux';
import {addUser} from "../../../store/actions/usersActions"

const mapDispatchToProps = (dispatch) => ({
    addNewUser: (userObj) => dispatch(addUser(userObj))
})

function RegistretaionForm({user,addNewUser}) {
    const [ userId,setUserId]=useState(0)

    const changeInput = (e) => {  
         user[e.target.name] = e.target.value //generic capture of each input and its value
    }
    const handleSubmit = event => {
         console.log('handleSubmit ran');
         event.preventDefault(); // prevent page refresh
         setUserId(userId+1)
         user._id = userId
         addNewUser(user)
    };

   return (
        <form onSubmit={handleSubmit}>
           <h1><b>Register </b></h1>
           <span>Please fill in this form to create an account.</span>
 
           <label htmlFor="fName"><b>First Name</b></label>
           <input type="text" name="fName" defaultValue={user.fName} id="fName" required
           onChange={changeInput}/>
 
           <label htmlFor="lName"><b>Last Name</b></label>
          <input type="text" name="lName" defaultValue={user.lName} id="lName" required
          onChange={changeInput}/>
 
 
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" name="email" defaultValue={user.email} id="email" required
          onChange={changeInput}/>
      
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" name="password" defaultValue={user.password} id="psw" required
          onChange={changeInput}/>
           
          <p>By creating an account you agree to our <a href="#">Terms and Privacy</a>.</p>
          <button type="submit" class="registerbtn">Register</button>
       </form>
   );
}

export default connect(null,mapDispatchToProps)(RegistretaionForm);