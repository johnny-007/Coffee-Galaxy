import React from 'react';
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
import FooterImg from '../../assets/Pics/Footer2.jpg';

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Services",
        link: "/#services",
    },
    {
        title: "Testimonials",
        link: "/#testimonials",
    },
];

const BgFooterImg = {
    backgroundImage: `url(${FooterImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "300px",
    width: "100%",
};

const Footer = () => {
  return (
    <div style={BgFooterImg} className='text-white'>
      <div className='bg-black/40 min-h-[300px] flex items-center'>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 pt-5">
          {/* Widget 1 */}
          <div
          className='flex flex-col items-center md:items-start'>
            <a href="#"
              className='font-bold tracking-widest text-5xl sm:text-3xl font-cafe'>
              Coffee Galaxy
            </a>
            <p className='pt-3 font-semibold font-cafe mt-3'>
              Where Every Sip Tells a Story
            </p>
            <p className='pt-4 text-center md:text-left'>
              Defence Raya Commercial Fairways <br />
              Block-7 Shop-45
            </p>
            <button
             className='mt-6 bg-gradient-to-r from-primary to-secondary border-2
             border-primary rounded-full px-6 py-3 text-white hover:scale-95 duration-200'>
              Visit Today
            </button>
          </div>
          {/* Widget 2 */}
          <div 
          className='flex flex-col items-center'>
            <h1 className='text-3xl font-semibold font-cafe mb-3'>
              Quick Links
            </h1>
            <ul className='space-y-3'>
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className='inline-block hover:scale-105 duration-200 
                  text-lg text-center'>
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Widget 3 */}
          <div  
          className='flex flex-col items-center'>
            <h1 className='text-3xl font-semibold font-cafe mb-3'>
              For More
            </h1>
            <div className='space-x-3'>
              <a href="#">
                <FaFacebook className='text-3xl inline-block hover:scale-105 duration-200' />
              </a>
              <a href="#">
                <FaInstagram className='text-3xl inline-block hover:scale-105 duration-200' />
              </a>
              <a href="#">
                <FaGoogle className='text-3xl inline-block hover:scale-105 duration-200' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
