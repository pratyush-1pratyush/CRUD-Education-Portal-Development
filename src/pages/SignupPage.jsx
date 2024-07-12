import React, { useState } from 'react'
import { BsEyeSlashFill } from "react-icons/bs";
const SignupPage = () => {

 
  
 
  return (
     <section className='signUpMain'>
      <div className='signUPage'>
       <div id='singPage'>
       <article> Sign Up </article>
        <div>
                <input type='text' name='' id="text4" placeholder=' Student name' />
                <br/>
                 
                <input type='text' name='' id="text4" placeholder='Email'   />
                <br/>
            <input type='password' name='' id="text4" placeholder=' Password' />
         
             <br/>
             
             <button  id="button2" > sign up</button>
       
            <div id='lastTextOne'>Already have an account?</div>
            <div id='secondText'>Log In</div>
        </div>
        </div>
       </div>
      
     </section>
  )
}

export default SignupPage
