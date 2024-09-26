import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Forgot from './components/Forgot/Forgot'
import OTP from './components/OTP/OTP'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
      <Route path='/otp' element={<OTP/>}/>
      <Route path='/home' element={<Home/>}/>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App