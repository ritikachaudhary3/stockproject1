import React from 'react'
import photo from '/src/assets/Image.png'
import BlogCard from './BlogCard'

const Blog = () => {
  const Bloglist = [
    {
      photo: "/src/assets/Image.png",
      heading: "Our top 10 frameworks to use",
      description: "JavaScript frameworks make development easy with extensive"
    },
    {
      photo: "/src/assets/Image.png",
      heading: "Our top 10 frameworks to use",
      description: "JavaScript frameworks make development easy with extensive"
    },
    {
      photo: "/src/assets/Image.png",
      heading: "Our top 10 frameworks to use",
      description: "JavaScript frameworks make development easy with extensive"
    },
    {
      photo: "/src/assets/Image.png",
      heading: "Our top 10 frameworks to use",
      description: "JavaScript frameworks make development easy with extensive"
    },
  ];

  return (
    <section className="w-full bg-[#FDECF2] py-20 px-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-center font-poppins font-bold text-[28px] md:text-[40px] text-[#1200FF]">
          Blog
        </h1>

        {/* Blog Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Bloglist.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
          {Bloglist.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
          {/* If you have more blogs, just add to the array, no need for manual rows */}
        </div>
      </div>
    </section>
  );
};

export default Blog;


