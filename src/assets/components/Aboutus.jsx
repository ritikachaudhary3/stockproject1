import React from 'react'
import Navbar from './Navbar'
import Course from './Coursebox/Course'
import aboutimg from '/src/assets/image 4.png'
import aboutimg2 from '/src/assets/image 3.png'
import Contactus from './Contactus'
import Faq from './Faq'
import Footer from './Footer'
const Aboutus = () => {
  return (
    <div>
      <Navbar/>
      <section  className="bg-[#FDECF2] py-12 px-6 ">
  <div className="max-w-[1140px] mx-auto md:mt-4">
    
    {/* First Row */}
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
      <div className="w-full lg:w-[50%]">
        <h3 className="font-popinns font-bold text-2xl text-[#1200FF] mb-4">About Us</h3>
        <p className="font-poppins text-lg text-justify">
          The company’s flagship program is a comprehensive course that covers all key aspects of trading, ranging from the basics of stock market functionality to advanced technical strategies. 
          Students gain a deep understanding of Technical Analysis, Trading Psychology, and Risk Management, all essential components for navigating the financial markets with confidence and precision. 
          With Mr. Kandpal's extensive experience, including his successful completion of all levels of the Chartered Market Technician (CMT) certification,
          Aadya Financialnerve ensures that students receive industry-leading instruction.
        </p>
      </div>
      <div className="w-full lg:w-[50%]">
        <img src={aboutimg} alt="image" className="w-full h-auto object-cover rounded-md" />
      </div>
    </div>

    {/* Second Row */}
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-16">
      <div className="w-full lg:w-[50%]">
        <img src={aboutimg2} alt="image" className="w-full h-auto object-cover rounded-md" />
      </div>
      <div className="w-full lg:w-[50%]">
        <p className="font-poppins text-[18px] text-justify">
          Aadya Financialnerve prides itself on its student-centric approach, providing personalized learning experiences tailored to each individual’s pace and
          background. The institute simplifies the complexities of trading with structured, easy-to-follow courses, 
          and places a strong emphasis on the practical application of skills. Additionally, ethical practices and responsible trading form a core part of the curriculum, preparing students for sustainable success.
          Through its 
          focus on transparency, professionalism, Aadya Financialnerve has built a solid reputation in the industry. It has become the go-to platform for anyone aspiring to build a successful career in stock
          market trading or gain deeper financial market expertise.
        </p>
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

export default Aboutus