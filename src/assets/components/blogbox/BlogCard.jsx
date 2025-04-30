import React from 'react'

const BlogCard = ({ photo, heading, description }) => {
  return (
    <div id="blog" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img src={photo} alt="photo" className="w-full h-[180px] object-cover" />
      
      <div className="p-4">
        <h1 className="font-poppins font-semibold text-[16px] mb-2">{heading}</h1>
        <p className="font-poppins text-[#667085] text-[14px]">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;


