import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './layout.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/home2/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'

// creating router 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "user/:userid",
//         element: <User/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  ///* In React.js, <RouterProvider/> is a component used for managing routing in an application. It's typically part
  //of a routing library like React Router. This component wraps your entire application and provides the necessary 
  //context for routing, allowing you to navigate between different pages or views based on the URL.  
  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
