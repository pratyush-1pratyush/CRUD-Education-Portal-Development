import React, { useContext, useState } from 'react'
import { globalVariable } from "../projectContext/ContextApi"
import { PiStudentFill } from "react-icons/pi";
import axios from 'axios';


const ViewMore = ({ data }) => {
  let data1 = useContext(globalVariable)
  console.log(data);
  let { setViewMore } = data1;

  return (
    <section className='viewMore' onClick={(e) => { if (e.target.className == "viewMore") setViewMore(false) }}>

      <article className='popUP'>
        <div>
        <PiStudentFill  className='emoji'/>
         <p id='name1'>  {data.names}</p>
         <p id="name2">{ data.username}</p>
           <p id="gender1">  {data.gender} </p>
           <p id='email1'> {data.emailId} </p>
           <p id='contact1'>{data.contact} </p>
        </div>
      </article>
    </section>
  )
}

export default ViewMore
