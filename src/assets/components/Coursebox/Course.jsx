import React from 'react'
import CourseCard from './CourseCard'
// import coursephoto from '/src/assets/download (1) 1.png'
import { useNavigate } from "react-router-dom";

const Course = () => {
  const courselist = [
    {
      title: "Stock Market",
      description: "More than 8yr Experience. Learn how to become a professional Now...",
      price: "Rs. 2999",
      oldprice: "Rs. 32.90",
      details: "View Detail",
      photo: "/src/assets/download (1) 1.png",
      img: "/src/assets/Frame.png"
    },
    {
      title: "Stock Market",
      description: "More than 8yr Experience. Learn how to become a professional Now...",
      price: "Rs. 2999",
      oldprice: "Rs. 32.90",
      details: "View Detail",
      photo: "/src/assets/download (1) 1.png",
      img: "/src/assets/Frame.png"
    },
    {
      title: "Stock Market",
      description: "More than 8yr Experience. Learn how to become a professional Now...",
      price: "Rs. 2999",
      oldprice: "Rs. 32.90",
      details: "View Detail",
      photo: "/src/assets/download (1) 1.png",
      img: "/src/assets/Frame.png"
    },
    {
      title: "Stock Market",
      description: "More than 8yr Experience. Learn how to become a professional Now...",
      price: "Rs. 2999",
      oldprice: "Rs. 32.90",
      details: "View Detail",
      photo: "/src/assets/download (1) 1.png",
      img: "/src/assets/Frame.png"
    }
  ];

  return (
    <section className=" bg-[#FDECF2] py-20 px-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-center font-poppins font-bold text-[26px] md:text-[30px] text-[#1200FF]">
          Trending <span className="text-[#333333]">Courses</span>
        </h1>

        {/* Cards container */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courselist.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};




export default Course