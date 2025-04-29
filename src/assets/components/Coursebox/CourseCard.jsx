import React from 'react'
import { useNavigate } from 'react-router-dom';

// course div css 
const CourseCard = ({ title, description, price, oldprice, photo, img }) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white  shadow-md overflow-hidden flex flex-col">
      <img src={photo} alt="course" className="w-full h-[180px] object-cover" />

      <div className="p-4 flex-1 flex flex-col justify-between border-b-2 border-transparent hover:border-b-4 hover:border-[#1200FF] hover:shadow-lg-[#1200FF] transition-all duration-300 hover:shadow-lg cursor-pointer">
        <div>
          <h2 className="font-poppins font-bold text-[18px]">{title}</h2>
          <p className="text-[15px] mt-2 font-poppins">{description}</p>
        </div>

        <div className="mt-4">
          <h3 className="font-bold font-poppins text-[20px]">
            {price}{" "}
            <span className="font-medium line-through text-gray-400 text-[16px]">{oldprice}</span>
          </h3>

          <button
            onClick={() => navigate("/coursedetails")}
            className="mt-3 text-[#7830FF] underline font-poppins font-medium flex items-center gap-2"
          >
            View Detail
            <img src={img} alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;


