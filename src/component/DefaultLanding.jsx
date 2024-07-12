import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import LandingNav from './LandingNav'

const DefaultLanding = () => {
  return (
     
      <section className='defaultLanding'>
         
        <LandingNav/>
        <div id='defaultSection'></div>
      </section>
   
  )
}

export default DefaultLanding
