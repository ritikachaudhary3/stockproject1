import React from 'react'
import logo1 from '/src/assets/3[1] 1.png'
const Footer = () => {
    return (
      <footer className=" bg-[#072C3E] py-12 px-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
  
          {/* Left: Logo & Description */}
          <div className="flex-1 ">
            <img className="mb-4" src={logo1} alt="Logo" />
            <p className="text-white font-poppins text-justify leading-relaxed text-[16px]">
              Anubhav Kandpal is a seasoned stock market educator and technical analyst with over 12 years of experience in 
              the financial markets.
            </p>
          </div>
  
          {/* Right: Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-poppins font-semibold text-[18px] mb-3">Company</h3>
              <ul className="space-y-2 text-white text-[16px] font-poppins">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-poppins font-semibold text-[18px] mb-3">Courses</h3>
              <ul className="space-y-2 text-white text-[16px] font-poppins">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-poppins font-semibold text-[18px] mb-3">Social Links</h3>
              <ul className="space-y-2 text-white text-[16px] font-poppins">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Pinterest</li>
                <li>X</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-poppins font-semibold text-[18px] mb-3">Terms</h3>
              <ul className="space-y-2 text-white text-[16px] font-poppins">
                <li>Privacy Policy</li>
                <li>Cookie</li>
                <li>Legal</li>
              </ul>
            </div>
          </div>
  
        </div>
      </footer>
    )
  }
  
  export default Footer;
  
