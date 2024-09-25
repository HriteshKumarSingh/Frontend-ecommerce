import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import { ToastContainer } from 'react-toastify'
import store from './redux/store/store.js'
import App from './App.jsx'
import './index.css'
import "./App.css"
import "react-toastify/ReactToastify.css"

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
      <ToastContainer/>
    </Provider>
)
