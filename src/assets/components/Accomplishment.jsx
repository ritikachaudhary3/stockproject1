import React from 'react'

const Accomplishment = () => {
  return (
    <div className="w-full bg-[#7733FC] py-8">
    <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-0">
      
      {/* Card 1 */}
      <div className="text-center">
        <h1 className="font-poppins text-white font-bold text-[36px] md:text-[45px]">12k+</h1>
        <p className="mt-2 text-white text-[18px] md:text-[20px] font-[400]">Happy Students</p>
      </div>
      
      {/* Card 2 */}
      <div className="text-center">
        <h1 className="font-poppins text-white font-bold text-[36px] md:text-[45px]">180+</h1>
        <p className="mt-2 text-white text-[18px] md:text-[20px] font-[400]">Batches Completed</p>
      </div>
      
      {/* Card 3 */}
      <div className="text-center">
        <h1 className="font-poppins text-white font-bold text-[36px] md:text-[45px]">160%</h1>
        <p className="mt-2 text-white text-[18px] md:text-[20px] font-[400]">Conversion rate increased</p>
      </div>
      
      {/* Card 4 */}
      <div className="text-center">
        <h1 className="font-poppins text-white font-bold text-[36px] md:text-[45px]">36%</h1>
        <p className="mt-2 text-white text-[18px] md:text-[20px] font-[400]">12 yr CAGR</p>
      </div>
  
    </div>
  </div>
  
  )
}

export default Accomplishment