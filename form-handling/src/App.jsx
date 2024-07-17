import React, { useRef } from 'react'

const App = () => {
  let login= useRef()
  let pass= useRef()
  let emailId= useRef()
  let handleSubmit =(e)=>{
    e.preventDefault();
    console.log(login.current.value)
    console.log(pass.current.value)
    console.log(emailId.current.value)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
            <label htmlFor=''  >LoginId:</label>
            <input type='text' name='' id='' ref={login}/>
            <br/>
            <label htmlFor=''>Password:</label>
            <input type='password' name=' ' id='' ref={pass} />
            <br/>
            <label htmlFor=''>Email:</label>
            <input type='email' name='' id='' ref={emailId} />
            <br/>
            <button>Submit</button>
            </form>
    </div>
  )
}

export default App
// uncontroll store inside dom 
//refs are conect with real dom 
