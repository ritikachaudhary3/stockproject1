import React from 'react'

const Contactus = () => {
  return (
  
  <section id="contactus" className="max-w-7xl  mx-auto px-6 bg-[#E7F0FF]  lg:flex-row justify-between items-center gap-8 ">

    {/* Map and Heading Section */}
    <div className='md:flex flex-row gap-32'>
    <div className=" w-full lg:w-1/2 px-4">
      <h1 className="text-xl font-bold font-poppins mt-2">Contact Us</h1>
      <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-4">We’re here to answer your question!</h2>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5106813887664!2d78.0061964!3d30.3079888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092be94375e729%3A0xc160311fe8cb82d6!2sNovaNectar%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1745169889626!5m2!1sen!2sin" 
        className="w-full h-[300px] md:h-[400px] lg:h-[350px] rounded-2xl mt-8"
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  
    {/* Form Section */}
    <div className="w-full lg:w-[450px] bg-[#F0E1E8] rounded-2xl  mt-4 p-6">
      <h2 className="text-xl font-bold font-poppins mb-2">Get in Touch</h2>
      <p className="text-base font-medium font-poppins mb-4">You can reach us anytime</p>
  
      <form action="#" method="POST" className="space-y-4">
        <div className="flex flex-col md:flex-row gap-2">
          <input type="text" placeholder="First Name" name="firstname" required 
            className="w-full bg-white rounded-full h-12 px-4"/>
          <input type="text" placeholder="Last Name" name="lastname" required 
            className="w-full bg-white rounded-full h-12 px-4"/>
        </div>
  
        <input type="tel" placeholder="Phone Number" name="phoneno"
          className="w-full bg-white rounded-full h-12 px-4"/>
  
        <input type="email" placeholder="Email" name="email" required
          className="w-full bg-white rounded-full h-12 px-4"/>
  
        <textarea name="message" rows="4" placeholder="Message (Optional)" 
          className="w-full bg-white rounded-2xl px-4 py-2"></textarea>
  
        <div className="flex justify-end">
          <button type="submit"
            className="w-48 h-12 bg-[#1200FF] hover:bg-blue-700 text-white font-medium rounded-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
    </div>
  
    {/* Contact Info Cards */}
    <div className="ax-w-7xl mx-auto px-4  flex mt-10 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Mail Us */}
        <div className="bg-white rounded-2xl p-6 shadow-md flex   items-start gap-4">
          <div className="bg-blue-700 p-3 rounded-xl text-white">
            {/* mail icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Mail Us</h4>
            <p className="text-[14px] text-gray-600">Any Query</p>
            <p className="text-[14px] text-gray-600">Financialnerve@gmail.com</p>
          </div>
        </div>
  
        {/* Call Us */}
        <div className="bg-white rounded-2xl p-6 shadow-md flex  items-start gap-4">
          <div className="bg-blue-700 p-3 rounded-xl text-white">
            {/* call icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l.61 1.83a1 1 0 01-.21.96l-1.16 1.16a16.018 16.018 0 006.1 6.1l1.16-1.16a1 1 0 01.96-.21l1.83.61a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Call Us</h4>
            <p className="text-[13px] text-gray-600">Mon-Sat 09:00AM to 06:00PM</p>
            <p className="text-[13px] text-gray-600">+91 XXXXX-XXXXX</p>
          </div>
        </div>
  
        {/* Visit Us */}
        <div className="bg-white rounded-2xl p-6 shadow-md  flex items-start gap-4">
          <div className="bg-blue-700 p-3 rounded-xl text-white">
            {/* location icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.134 2 5 5.134 5 9c0 4.03 5.573 10.163 6.403 11.062a1 1 0 001.194 0C13.427 19.163 19 13.03 19 9c0-3.866-3.134-7-7-7z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Visit Us</h4>
            <p className="text-[13px] text-gray-600">
              66-A, GMS Rd, behind Wadia Institute, Nehru Enclave, Satya Vihar, Ballupur, Dehradun, Uttarakhand 248001
            </p>
          </div>
        </div>
  
      </div>
    </div>
    
  
  </section>
  
  )
}

export default Contactus