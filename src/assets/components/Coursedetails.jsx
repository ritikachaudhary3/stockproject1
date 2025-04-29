import React from 'react'
import { useState } from 'react'
import coursepic from '/src/assets/download (1) 1 (1).png'
import star from '/src/assets/star_purple500_24px.png'
import Accordian from './Accordian'
import list from '/src/assets/list_alt_24px (1).png'
import section from '/src/assets/chrome_reader_mode_24px.png'
import tv from '/src/assets/live_tv_24px.png'
import volume from '/src/assets/volume_up_24px.png'
import Navbar from './Navbar'
import Course from './Coursebox/Course'
import Blog from './blogbox/Blog'
import Contactus from './Contactus'
import Faq from './Faq'
import Footer from './Footer'
// import {FaList } from "react-icons/fa";
const Coursedetails = () => {
  return (
    <div>
      <Navbar/>
      <section className="bg-[#FDECF2] py-12 px-6  md:px-6 ">
  <div className="max-w-[1140px] mx-auto  flex flex-col lg:flex-row gap-20">
    
    {/* Left Section - Course Details */}
    <div className="w-full lg:w-[60%]">
      <img className="w-full h-auto rounded-md" src={coursepic} alt="photo" />
      
      <h1 className="font-poppins font-bold text-3xl mt-4">
        Make Uber Clone App
      </h1>
      
      <div className="flex items-center text-[17px] font-normal text-[#C5322A] mt-2">
        Anubhav Kandpal 
        <span className="ml-2 mt-1"><img src={star} alt="star" className="inline-block w-4 h-4" /></span>
        <span className="text-black ml-2">4.8</span>
        <span className="text-[#1B1B1B99] ml-2 text-[15px]">(1,812 ratings)</span>
      </div>

      <h2 className="font-poppins text-black font-bold text-xl mt-6">About Course</h2>
      <p className="text-[#1B1B1B99] font-normal text-[15px] mt-2 text-justify">
      Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks,
       Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy
        to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering 
        sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.      </p>

      <div className="mt-8">
        <h1 className="font-poppins font-bold text-[22px] mb-2">Course Curriculum</h1>
        <Accordian />
      </div>
    </div>

    {/* Right Section - Price Card */}
    <div className='w-full lg:w-[400px] h-[600px] overflow-y-auto border-2  bg-white rounded-md '>
  <h1 className='w-full px-4 font-poppins font-bold text-[26px] mt-4'>
    Make Uber Clone App
    <p className='text-[22px] mt-3 font-bold'>
      Rs.2240 <span className='font-normal text-gray-400 text-[18px] ml-3 line-through'>Rs.399</span>
    </p>
    <p className='inline-block border h-[27px] w-[80px] text-center bg-[#A04AE3] rounded-sm mt-3 text-[14px] text-white'>20% OFF</p>
  </h1>

  <button className='bg-[#4640DE] rounded-2xl h-[45px] w-[90%] mx-auto text-white mt-6 block text-[18px]'>
    Register Now
  </button>

  <div className='px-4 mt-8'>
    <h3 className='font-poppins font-normal text-[18px]'>This Course includes</h3>
    <ul className='mt-4 space-y-2'>
      <li className='flex items-center gap-3 text-[16px] text-gray-700 '><img src={list} alt="list"/> 22 Sections</li>
      <li className='flex items-center gap-3 text-[16px] text-gray-700'><img src={section} alt="section"/> 152 Lectures</li>
      <li className='flex items-center gap-3 text-[16px] text-gray-700 '><img src={tv} alt="tv"/> 21h 33m total</li>
      <li className='flex items-center gap-3 text-[16px] text-gray-700 mb-4'><img src={volume} alt="vol"/> English</li>
    </ul>

    <div className='mt-6'>
      <h3 className='font-semibold text-[20px]'>Explore related topics</h3>
      <div className='flex flex-wrap gap-6 mt-6'>
        <button className='px-3 py-1 border rounded'>UI/UX</button>
        <button className='px-3 py-1 border rounded'>Design System</button>
        <button className='px-3 py-1 border rounded'>Figma</button>
        <button className='px-3 py-1 border rounded'>UX Research</button>
        <button className='px-3 py-1 border rounded'>Prototype</button>
      </div>
    </div>
  </div>
</div>

  </div>
</section>

    <Course/>
    <Contactus/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default Coursedetails;