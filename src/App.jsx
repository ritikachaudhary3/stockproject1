import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import Accomplishment from './assets/components/Accomplishment'
import Mentor from './assets/components/Mentor'
import Aboutus from './assets/components/Aboutus'
import Course from './assets/components/Coursebox/Course'
import Blog from './assets/components/blogbox/Blog'
import Clientreview from './assets/components/Clientreview'
import Contactus from './assets/components/Contactus'
import Faq from './assets/components/Faq'
import Footer from './assets/components/Footer'
// import Aboutus from './assets/components/Aboutus'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Coursedetails from './assets/components/Coursedetails'

const router= createBrowserRouter(
  [
    {
      path:'/',
      element:
      <div>
        <Navbar/>
        <Home/>
        <Accomplishment/>
        <Mentor/>
        <Course/>
        <Blog/>
        <Clientreview/>
        <Contactus/>
        <Faq/>
        <Footer/>
      </div>
    },

    {
      path:'/about',
      element:
      <div>
        <Navbar/>
        <Mentor/>
        <Footer/>
      </div>
    },

    {
      path:'/coursedetails',
      element:
      <div>
        <Coursedetails/>
      </div>
    },

    {
      path:'/aboutus',
      element:
      <div>
        <Aboutus/>
      </div>
    },

    {
      path:'/course',
      element:
      <div>
        <Navbar/>
        <Course/>
        <Footer/>
      </div>
    },

    {
      path:'/blog',
      element:
      <div>
        <Navbar/>
        <Blog/>
        <Footer/>
      </div>
    },

    {
      path:'/contact',
      element:
      <div>
        <Navbar/>
        <Contactus/>
        <Footer/>
      </div>
    }
  ]
)







function App() {


  return (
    <div>
      <RouterProvider router={router}/>
      {/* <Navbar/>
      <Home/>
      <Accomplishment/>
      <Mentor/> */}
      {/* <Aboutus/> */}
      {/* <Course/>
      <Blog/>
      <Clientreview/>
      <Contactus/>
      <Faq/>
      <Footer/>  */}
      {/* <Aboutus/> */}
    </div>
  )
}

export default App
