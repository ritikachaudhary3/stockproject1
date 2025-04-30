import React from 'react'
import photo from "/src/assets/Anubhav's Pic[1] 1.png"
import { useNavigate } from 'react-router-dom';
const Mentor = () => {
  const navigate= useNavigate();
    
return (
        <section id="aboutus"className="w-full  p-6 flex flex-col-reverse md:flex-row items-center justify-center bg-[#FEF8FA]">
          {/* Left Section: Text */}
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left p-4  ">
            <h1 className="text-[20px] font-bold font-poppins mt-4">Meet the Mentor</h1>
            <h2 className="text-[32px] md:text-[38px] text-[#1200FF] font-bold font-poppins mt-2">
              Mr. Anubhav Kandpal
            </h2>
            <p className="text-[15px] leading-[30px] font-poppins mt-4 text-justify text-gray-700">
              Your Stock Market Mentor and seasoned Technical Analyst with over a decade of financial market expertise.
              Armed with MBA and the prestigious CMT Level 3 certification, Anubhav stands out as one of the youngest achievers in the field.
              As a Trusted Mentor to professionals and an Inspirational guide to aspiring students, Anubhav has become a beacon in the Stock Market realm.
              His specialties include Technical Analysis, Behavioral Finance, and Investment Psychology.
            </p>
            <button
              onClick={() => navigate('/aboutus')}
              className="w-[200px] md:w-[242px] h-[48px] mt-6 bg-[#4640DE] text-white font-poppins rounded-xl"
            >
              Read More
            </button>
          </div>
    
          {/* Right Section: Image */}
          <div className="md:w-1/2 w-full flex flex-col items-center relative ">
            {/* Background Circle */}
            <div className="h-[250px] w-[250px] md:h-[360px] md:w-[365px] rounded-full bg-gradient-to-b from-[#459BEB] to-[#101B28] mt-8 md:mt-[50px]"></div>
            
            {/* Mentor Image */}
            <img
              className="h-[250px] md:h-[350px] w-[190px] md:w-[240px] absolute top-[5%] md:top-[10%]"
              src={photo}
              alt="mentor"
            />
          </div>
          
        </section>
      );
    }
    
    


export default Mentor