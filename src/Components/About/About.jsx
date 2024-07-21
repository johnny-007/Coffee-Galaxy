import React from 'react';
import AboutImg from "../../assets/Pics/About.png";
import AboutBgImg from "../../assets/Pics/AboutBgImg.jpg";

const BgImg = {
  backgroundImage: `url(${AboutBgImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "70vh", // Adjusted height
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden", // Ensures content does not overflow
};

const About = () => {
  return (
    <>
      <span id='about'></span>
      <div style={BgImg}>
        <div 
            className="container flex flex-col sm:flex-row justify-center 
                       items-center py-8 sm:py-12 space-y-6 sm:space-y-0">
          <div 
              data-aos="zoom-in"  
              className='flex justify-center items-center sm:w-1/2'>
           <img 
            src={AboutImg}
            alt="AboutImage"
            className='max-w-full h-auto mx-auto spin drop-shadow-xl' />
          </div>
          <div 
             data-aos="fade-up" 
             className='flex flex-col justify-center text-center sm:text-left sm:w-1/2 px-4'>
          <h1 
             data-aos="fade-up"
             className='text-3xl sm:text-4xl font-extrabold font-cafe mb-4 text-white'>
             Coffee Galaxy
            </h1>
            <p className='text-md sm:text-lg text-[#4B2E2B] 
                     tracking-wide leading-6 font-bold mb-6'>
              Welcome to Coffee Galaxy, where every cup is a journey through
              the cosmos of flavors. We pride ourselves on brewing the finest coffees,
              crafted with passion and precision. Our mission is to provide a warm and
              inviting space where coffee lovers can relax, socialize, and enjoy
              the best coffee experience in the galaxy.
            </p>
            <div className='flex justify-center'>
              <button className='bg-gradient-to-r from-primary to-secondary 
              border-2 border-primary rounded-full px-6 py-3 text-white 
              hover:scale-95 duration-200'>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
