import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import Home from './assets/components/Home'
import Accomplishment from './assets/components/Accomplishment'
import Mentor from './assets/components/Mentor'
import Aboutus from './assets/components/Aboutus'
import Course from './assets/components/Coursebox/Course'
import Blog from './assets/components/blogbox/Blog'
import Clientreview from './assets/components/Clientreview'
import Contactus from './assets/components/Contactus'
import Faq from './assets/components/Faq'
import Coursedetails from './assets/components/Coursedetails'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Home />
        <Accomplishment />
        <Mentor />
        <Course />
        <Blog />
        <Clientreview />
        <Contactus />
        <Faq />
        <Footer />
      </div>
    ),
  },
  {
    path: '/about',
    element: (
      <div>
        <Navbar />
        <Mentor />
        <Footer />
      </div>
    ),
  },
  {
    path: '/coursedetails',
    element: <Coursedetails />,
  },
  {
    path: '/aboutus',
    element: <Aboutus />,
  },
  {
    path: '/course',
    element: (
      <div>
        <Navbar />
        <Course />
        <Footer />
      </div>
    ),
  },
  {
    path: '/blog',
    element: (
      <div>
        <Navbar />
        <Blog />
        <Footer />
      </div>
    ),
  },
  {
    path: '/contact',
    element: (
      <div>
        <Navbar />
        <Contactus />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;









