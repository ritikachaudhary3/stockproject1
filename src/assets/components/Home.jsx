import React from 'react'
import course from '/src/assets/download (2) 1.png'
const Home = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6  flex flex-col-reverse md:flex-row items-center justify-center bg-white ">
      
    {/* Left Section (Text) */}
    <div className="flex flex-col md:w-1/2 w-full p-4">
      <h1 className="text-[35px] md:text-[45px] font-poppins leading-tight md:leading-[70px] mt-8 md:mt-12 uppercase font-bold text-center md:text-left">
        Learn all about <span className="text-[#1200FF]">Stock Market</span>
      </h1>
      <p className="text-[16px] font-poppins mt-4 text-justify text-gray-600 px-2 md:px-0">
        Your journey to success begins today. Enter your details below for your Discord invitation, trading resources, and exclusive offers.
      </p>
      <button className="h-[48px] w-[200px] md:w-[282px] font-poppins mt-6 bg-[#4640DE] rounded-2xl font-[400] text-white self-center md:self-start">
        Explore Courses
      </button>
    </div>
  
    {/* Right Section (Image) */}
    <div className="flex justify-center md:w-1/2 w-full p-4">
      <img className="h-[300px] md:h-[445px] w-auto object-contain" src={course} alt="stock" />
    </div>


  </section>


  )
}

export default Home