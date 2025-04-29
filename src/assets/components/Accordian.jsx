import React from 'react'
import { useState } from 'react';
// import play from '/src/assets/play_circle_filled_24px.png'
import { FaChevronDown, FaChevronUp,FaPlayCircle, } from "react-icons/fa";


const AccordionItem = ({ chapter, videos }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-pink-100 transition-all duration-300">
      <button
        className="w-full flex justify-between items-center py-4 px-4 text-left "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <span className="font-bold text-lg text-[#000000]">{chapter.title}</span>
          <div className="text-sm text-gray-500 mt-1">
            {chapter.videoCount} Videos • <span className="text-red-500">{chapter.duration}</span>
          </div>
        </div>
        <span className="text-[#000000]">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 space-y-3">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border border-pink-100 rounded-md p-3 bg-pink-50"
            >
              <div className="text-sm">
                <p className="font-medium">{video.title}</p>
                <p className="text-xs text-gray-500 flex items-center mt-1">
                  <FaPlayCircle className="text-green-400 mr-1" size={14} /> {video.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



const Accordian = () => {
  const data = [
    {
      title: "Chapter 1: Curriculum",
      videoCount: "1/12",
      duration: "1h 28m",
      videos: [
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" }
      ],
    },
    {
      title: "Chapter 1: Curriculum",
      videoCount: "1/12",
      duration: "1h 28m",
      videos: [
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" }
      ],
    },
    {
      title: "Chapter 1: Curriculum",
      videoCount: "1/12",
      duration: "1h 28m",
      videos: [
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" }
      ],
    },
    {
      title: "Chapter 1: Curriculum",
      videoCount: "1/12",
      duration: "1h 28m",
      videos: [
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" }
      ],
    },
    {
      title: "Chapter 1: Curriculum",
      videoCount: "1/12",
      duration: "1h 28m",
      videos: [
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" }
      ],
    },
    {
      title: "Chapter 1: Curriculum",
      videoCount: "1/12",
      duration: "1h 28m",
      videos: [
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" }
      ],
    },
    {
      title: "Chapter 1: Curriculum",
      videoCount: "1/12",
      duration: "1h 28m",
      videos: [
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" },
        { title: "Installing Vue JS", duration: "10m" }
      ],
    },
    
  ];

  return (
    <div className="w-full bg-white shadow-sm rounded-md">
      {data.map((chapter, idx) => (
        <AccordionItem key={idx} chapter={chapter} videos={chapter.videos} />
      ))}
    </div>
  );
};

  

export default Accordian