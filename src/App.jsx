import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { route } from "./projectRoute/CrudRouting";
import ContextApi from "./projectContext/ContextApi";
const App = () => {
  return (
    <ContextApi>
      <RouterProvider router={route}></RouterProvider>

    </ContextApi>
  )
}

export default App
