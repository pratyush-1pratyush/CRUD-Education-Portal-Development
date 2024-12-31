import axios from 'axios';
import React, { createContext, useEffect, useState, } from 'react'
export let globalVariable = createContext();
let { Provider } = globalVariable;

const ContextApi = ({ children }) => {
  let [userLogin, setUserLogin] = useState([])
  let [viewMore, setViewMore] = useState(false)
  let fetchCredentials = async () => {
    let { data } = await axios.get("https://crud-education-portal-development.vercel.app/api/users")
    console.log(data,"data")
    setUserLogin(data.credentials);
  };
  let validUser = (userData) => {
    return userLogin.find((ele, index, arr) => {
      if (ele.username == userData.username &&
        ele.password == userData.password) {
        return true;

      }

    })
  }
  useEffect(() => {
    fetchCredentials()
  }, [])
  return (
    <Provider value={{ userLogin, setUserLogin, validUser, viewMore, setViewMore }}>{children}</Provider>
  )
}

export default ContextApi
