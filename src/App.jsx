import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App