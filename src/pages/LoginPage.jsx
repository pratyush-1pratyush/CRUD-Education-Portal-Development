import React, { useContext, useState } from 'react'
import { PiStudentFill } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { globalVariable } from "../projectContext/ContextApi";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  let [data, setData] = useState(
    {
      username: "",
      password: "",
    })
  let navigate=useNavigate();
  let { validUser } = useContext(globalVariable);


  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });

  }
  let handleSubmit = (e) => {
    e.preventDefault();
    let valid = validUser(data);
    console.log(valid)
    if (valid) {
      toast.success("Login Successful")
      setTimeout(()=>{
        navigate("/home")
      },1000)
       
    }
    else {
      toast.error("Invalid UserName or Password")
    }
  }
  return (
    <section className='loginMainPage'>
      <div className='loginText'>WElCOME TO LOGIN </div>
      <div className='loginSecondPage'>

        <form className='forForm' onSubmit={handleSubmit}>
          <div className='" name-container'>
            {/* <div className='welcome'>hii</div> */}
            <PiStudentFill id='studentEmoji' />
            <input type='text' name='username' id="text1" placeholder=' StudentName' onChange={handleChange} />
            <br />
            <RiLockPasswordFill id='passwordEmoji' />
            <input type='password' name='password' id="text2" placeholder=' Password' onChange={handleChange} />
            <br />
            <TiTick id='tick' />
            <p className='info1'>Remember me</p>
            <p className='info2'>Forgot password</p>
            <br />

            <button className='submit'>LOGIN</button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default LoginPage
