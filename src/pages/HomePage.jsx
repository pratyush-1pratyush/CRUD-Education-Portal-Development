import React, { useContext } from 'react'
import { NavLink, Outlet, } from 'react-router-dom'
import { PiStudentLight } from "react-icons/pi";
const HomePage = () => {
  
  return (

    <section className='homepage'>
       
      <article className='asideBar'>
        <div className='logo2'>
        <PiStudentLight id='logo2'/>
         
        </div>
        <div id='logoText'> Home page</div> 
        <div className='NavButton'>
          <NavLink to="/home/about" className={({ isActive }) => { isActive ? "active" : "" }}>About</NavLink>
          <NavLink to="/home/allStudent" className={({ isActive }) => { isActive ? "active" : "" }}> AllStudent</NavLink>
          <NavLink to="/home/careers" className={({ isActive }) => { isActive ? "active" : "" }}>Careers</NavLink>
          <NavLink to="/home/createStudent" className={({ isActive }) => { isActive ? "active" : "" }}>CreateStudent</NavLink>
        </div>
      </article>
      <article className="homeChild">
        <div className='childHome'></div>
        <br/>
         

        <Outlet />

      </article>
    </section>
  )
}

export default HomePage
//to doidsply the childens