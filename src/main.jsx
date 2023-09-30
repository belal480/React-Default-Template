import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Blog from './Pages/Blog'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Hero from './Pages/Hero'
import Blog1 from './Pages/Blog1'
import Login from './Pages/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children:[
      {
        path: "/",
    element: <Hero /> ,
      },
      {
        path: "/AboutUs",
        element: <AboutUs/> ,
      },
      {
        path: "/ContactUs",
    element: <ContactUs /> ,
      },
      
      {
        path: "/Blog",
    element: <Blog /> ,
      },
      {
        path: "/Blog1",
    element: <Blog1 /> ,
      },
      {
        path: "/Login",
    element: <Login /> ,
      },
     
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
