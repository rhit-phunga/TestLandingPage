import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/TestLandingPage/",
    element: <App/>,
    
    children: [ 
      {
      path: "/TestLandingPage/",
      element: <Hero/>,
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
    {/* <App /> */}
  </React.StrictMode>,
)
