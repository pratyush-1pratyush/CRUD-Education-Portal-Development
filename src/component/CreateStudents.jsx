import axios from 'axios';
 import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 

const CreateStudents = () => {
  let [userDetails, setUserDetails] = useState({
    names: "",
    username: "",
    gender: "",
    emailId: "",
    contact: "",
    Images: "",
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
    axios.post("https://crud-education-portal-development-nine.vercel.app/api/users", userDetails)
    navigate("/home/allStudent")
  }

  return (
    <section className='createStudent'>
      <div className='jhgfdre '> 
      <br/>
      <form  className='for-Form' onSubmit={handleSubmit} >
    <div className='student'>Create Student</div>
          <label className='user'  >User:</label>
          <input type='text' name='username' value={username} id="place" placeholder=' userId' onChange={handleChange} required />
          <br />
          <label className= 'user'> Name:</label>
          <input type='text' name='names' value={names} id="place2" placeholder='Name' onChange={handleChange} />
          <br />
          <label className= 'user'>Email Id:</label>
          <input type='email' name='emailId' value={emailId} id="place1" placeholder=' EmailId' onChange={handleChange} />
          <br />
          <label for="Phone"  className= 'user' >Phone:</label>
          <input type="tel" id="place3" maxlength="10" minLength="10" name="contact" value={contact} placeholder='+91' required onChange={handleChange} />
          <br />
          <label for="gender"  className= 'user'>Gender:</label>
          <div name=" gender"  className= 'user2'>
            <input type="radio" id="gender" value="Male" onChange={handleChange} />Male
            <input type="radio" id="gender" value="Female" onChange={handleChange} />FeMale
            <input type="radio" id="gender" value="Other" onChange={handleChange} />Other
            </div><br />
            <input type="file" name="resume" id="file" /><br />
           

          <button id='lastButton'>submit</button>
    
        
      </form>
      </div>
    </section>
  )
}

export default CreateStudents
// variable ko object k andar name ko use krna h toh hm [] k andar name lenge