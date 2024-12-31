import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from "react-router-dom"
import { globalVariable } from "../projectContext/ContextApi"
import ViewMore from './ViewMore';
import { FaUserCircle } from "react-icons/fa";


const AllStudent = () => {
  let data = useContext(globalVariable)
  let { viewMore, setViewMore } = data
  let [users, setUsers] = useState([]);
  let [viewMoreUser, setViewMoreUser] = useState("")
  let [deleteCount, setDeleteCount] = useState(0)


  let fetchUsers = async () => {
    let { data } = await axios.get("https://crud-education-portal-development-nine.vercel.app/api/users")
    setUsers(data?.users);
  }
  /*let deleteUser = (id) => {
    axios.delete(`https://crud-education-portal-development-nine.vercel.app/api/users/${id}`);
    setDeleteCount(deleteCount + 1)
    console.log(deleteCount)
    toast.success(`${id} is delete`)
  }*/

  const deleteUser = (id) => {
    // Make the DELETE request to the serverless API
    axios.delete(`https://crud-education-portal-development-nine.vercel.app/api/users?id=${id}`)
      .then(response => {
        // Handle the success response
        setDeleteCount(deleteCount + 1);  // Update the deletion count
        console.log(deleteCount);  // Optional: log for debugging
        toast.success(`${id} is deleted`);  // Show success message
      })
      .catch(error => {
        // Handle the error response
        console.error("There was an error deleting the user:", error);
        toast.error("Error deleting user");
      });
  }
  useEffect(() => {
    fetchUsers();

  }, [deleteCount])
  return (
    <section className='AllStudent'>
      <article id='cardBox'>
        {/* <h1>all Student</h1> */}
        {users.map((ele, index) => {
          return <div key={index} className='card'>
            <FaUserCircle className='userCircle' />
            <h1 className='username'>{ele.username}</h1>
            <p className='dbName'>{ele.names}</p>

            <p>
              <Link to="/home/updateStudent" state={ele} className="update">update</Link>
              <button onClick={(e) => {
                setViewMore(true);
                e.stopPropagation();
                setViewMoreUser(ele);
              }} className='edit'>View More</button>
              <button onClick={() => { deleteUser(ele.id) }} className='delete'>Delete</button>
            </p>

          </div>
        })}
        {viewMore && <ViewMore data={viewMoreUser} />}
      </article>

    </section>
  )
}

export default AllStudent
