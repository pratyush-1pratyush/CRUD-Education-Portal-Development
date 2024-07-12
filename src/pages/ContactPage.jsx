import React from 'react'
import { Outlet ,Link} from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
const ContactPage = () => {
  return (
     
    <section className='ContactMain'>
      <div className='ContactPage'>
        <div id='message'>Send us a message</div>
        <input type='text' name='username' id="text9" placeholder=' Name'  />
            <br />
            <input type='text' name='username' id="text9" placeholder='Email'  />
            <br />
            <input type='text' name='username' id="text9" placeholder='Subject'  />
            <br />
            <input type='text' name='username' id="text10" placeholder=' Message'  />
            <br />
            <button id='send'>Send Messages</button>
       <section id='contactPic'>
       <div className='contact-us'>Contact us</div>
       <div id='we'>We'are open for any suggestion or just to have a chat</div>
       <CiLocationOn className='con-Icon'/>  
       <div id='LOCATION1'>Address:</div>
       <div id='LOCATION'>QJspider Sec 14,Gurugram,Hariyana</div>
       <div id='box'></div>
       <Link to="tel:8210063475"> 
       <FaPhoneAlt id='con'/> +91 8210063475
       </Link>
 
       <div id='con1'>Contact:</div>
         <Link to="mailto:singhaayu780@gmsail.com"> 
       <SiMinutemailer className='email' />singhaayu9709@gmail.com
       </Link >
       <div id='emai'>Email:</div>
       </section>
      </div>
    </section>
  )
}

export default ContactPage
