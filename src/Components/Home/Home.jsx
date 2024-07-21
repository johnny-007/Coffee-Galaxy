import React from 'react';
import HeroImg from "../../assets/Pics/HeroImage.png";

const Home = () => {
  return (
    <div className="min-h-[500px] sm:min-h-[550px] bg-brandDark flex justify-center
       items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text Section */}
          <div className='order-2 sm:order-1 flex flex-col justify-center gap-6'>
            <h1 
             data-aos="fade-up" data-aos-once="true"
             className='text-5xl sm:text-6xl lg:text-7xl font-bold font-cafe pt-16'>
              Where Every {" "}
               <span 
               data-aos="zoom-out"
               data-aos-delay="300" 
               className='text-primary font-cafe'>Sip</span>
              <br />Tells a Story
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <button className='bg-gradient-to-r from-primary to-secondary border-2
               border-primary 
              rounded-full px-4 py-2 text-white hover:scale-95 duration-200 mt-10'>
                Craft Your Cup
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div
          data-aos="zoom-in"
           className='min-h-[450px] flex justify-center items-center order-1 sm:order-2'>
            <img src={HeroImg} alt="Hero Image"
              className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
