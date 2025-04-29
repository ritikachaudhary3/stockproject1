import React from 'react'

const reviews = [
  {
    name: "Maxin Will",
    initials: "MW",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
    rating: 4,
  },
  {
    name: "Maxin Will",
    initials: "MW",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
    rating: 4,
  },
  {
    name: "Maxin Will",
    initials: "MW",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
    rating: 4,
  },
  {
    name: "Maxin Will",
    initials: "MW",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
    rating: 4,
  },
  {
    name: "Maxin Will",
    initials: "MW",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
    rating: 4,
  },
  {
    name: "Maxin Will",
    initials: "MW",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
    rating: 4,
  },
  
];

const Clientreview = () => {
  return (
    <div className="h-auto w-full p-8 bg-[#F5F5F5]"> 
      <h2 className="text-[30px] font-bold font-poppins text-center mb-10">
        Client <span className="text-blue-600">Review</span>
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-8 rounded-[30px] shadow-md w-[350px] h-[230px] flex flex-col justify-between">
            <p className="text-sm text-gray-700 mb-4 text-justify">
              {review.review}
            </p>
            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                <span className="text-white font-semibold">{review.initials}</span>
              </div>

              {/* Name & Rating */}
              <div>
                <h2 className="font-bold text-gray-800">{review.name}</h2>
                <div className="flex space-x-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    i < review.rating ? (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="#8B5CF6" viewBox="0 0 24 24" className="w-4 h-4">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ) : (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#8B5CF6" viewBox="0 0 24 24" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.917c.969 0 1.371 1.24.588 1.81l-3.978 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.978-2.89a1 1 0 00-1.176 0l-3.978 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.978-2.89c-.783-.57-.38-1.81.588-1.81h4.917a1 1 0 00.95-.69l1.518-4.674z" />
                      </svg>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientreview;


