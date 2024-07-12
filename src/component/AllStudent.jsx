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
    let { data } = await axios.get("http://localhost:4500/users")
    setUsers(data);
  }
  let deleteUser = (id) => {
    axios.delete(`http://localhost:4500/users/${id}`);
    setDeleteCount(deleteCount + 1)
    console.log(deleteCount)
    toast.success(`${id} is delete`)
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
