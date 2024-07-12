import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { PiStudentBold } from "react-icons/pi";

const LandingNav = () => {
  return (
    <section className='landing-nav'>
      <div className='logo'>
      <PiStudentBold  id='logo3' />
      </div>
      <article className='NavButtons'>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/contact">Contact</Link>
      </article>
    </section>
  )
}

export default LandingNav
