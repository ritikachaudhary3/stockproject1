import React from 'react'
import { useState } from 'react';

// faq ques/ans  css section 
const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="w-full mb-3 border-2 border-[#F0E1E8] rounded-[10px]">
    <button
      onClick={onClick}
      className="w-full flex gap-4 items-center justify-between py-4 px-4 rounded-[10px] font-poppins bg-white text-lg font-medium text-gray-800 focus:outline-none"
    >
      <div className="flex gap-4 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
             viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
             className="lucide lucide-plus">
          <path d="M5 12h14" /><path d="M12 5v14" />
        </svg>
        {title}
      </div>
    </button>

    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
      <div className="p-4 text-sm text-gray-600 bg-white border-t rounded-b-[10px] font-poppins">
        {content}
      </div>
    </div>
  </div>
);

  





// faq ques/ans details 


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { title: "What is the refund policy?", content: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans." },
    { title: "Are the courses conducted live?", content: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans." },
    { title: "Do the courses have any live interaction?", content: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans." },
    { title: "Are there any criteria for joining the courses?", content: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans." },
    { title: "Can I enroll in multiple courses?", content: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans." },
    { title: "Is there a community that I can join?", content: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans." },
    { title: "Whom do I contact in case of any issues or concerns?", content: "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans." },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-[#F0EBFA] py-20 px-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
        
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <button className="px-4 py-2 font-poppins bg-[#1200FF] border-[#1200FF] border-2 rounded-2xl text-white text-sm">
            Frequently Asked Questions
          </button>
          <h1 className="text-[32px] md:text-[36px] font-bold font-poppins">
            Get All Your Questions <span className="text-[#7830FF]">Answered Here</span>
          </h1>
          <p className="text-[16px] font-poppins">
            Have Questions? Here Quick Answers To Some Of the Most Common Queries 
            About My Services And Process.
          </p>
          <button className="px-4 py-2 border-2 border-[#1200FF] text-[#1200FF] rounded-2xl text-sm font-poppins">
            Need Support? WhatsApp Us
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;


