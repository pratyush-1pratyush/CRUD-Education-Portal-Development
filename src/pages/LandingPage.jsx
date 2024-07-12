import React from 'react'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <section className='landing'>
      
      <Outlet/>
    </section>
  )
}

export default LandingPage
