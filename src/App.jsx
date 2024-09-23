import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route/>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App