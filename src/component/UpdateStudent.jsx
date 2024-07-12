import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const UpdateStudent = () => {
    let {state}=useLocation()//it is raouting hook
    console.log(state)
  let [userDetails, setUserDetails] = useState({
    names: state.names,
    username: state.username,
    gender: state.gender,
    emailId: state.emailId,
    contact: state.contact,
    Images: state.Images,
  });
  let { names, username,
    gender,
    emailId,
    contact,
    Images } = userDetails;
  let navigate = useNavigate();
  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value })
  };
  console.log(userDetails);
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4500/users/${state.id}`, userDetails)
    navigate("/home/allStudent")
  }

  return (
    <section className='createStudent'>
      <div className='jhgfdre '> 
      <br/>
      <form className='for-Form' onSubmit={handleSubmit} >
      <div className='student'>Update Student</div>
        
          <label className= 'user' >UserId:</label>
          <input type='text' name='username' value={username} id="place" placeholder=' user Student' onChange={handleChange} required />
          <br />
          <label  className= 'user'>Name:</label>
          <input type='text' name='names' value={names} id="place2" placeholder=' StudentName' onChange={handleChange} />
          <br />
          <label  className= 'user'>EmailId:</label>
          <input type='email' name='emailId' value={emailId} id="place1" placeholder=' EmailId' onChange={handleChange} />
          <br />
          <label for="Phone" className= 'user' >Phone</label>
          <input type="tel" id="place3" maxlength="10" minlength="10" name="contact" value={contact} required onChange={handleChange} />
          <br />
          <label for="gender"  className= 'user'>Gender:</label>
          <div name=" gender"  className= 'user2'>
            <input type="radio" id="gender" value="Male" onChange={handleChange} />Male
            <input type="radio" id="gender" value="Female" onChange={handleChange} />FeMale
            <input type="radio" id="gender" value="Other" onChange={handleChange} />Other
            </div><br />
            <input type="file" name="resume" id="file" /><br />
          

          <button className='lastOneButton'>submit</button>
          <button className='lastTwoButton' onClick={()=>{navigate(-1)}}>Back</button>
    
        
        
      </form>
      </div>
    </section>
  )
}

export default UpdateStudent