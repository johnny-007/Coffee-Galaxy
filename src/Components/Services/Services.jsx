import React from 'react';
import Product1 from '../../assets/Pics/Product-1.png';
import Product2 from '../../assets/Pics/Product-2.png';
import Product3 from '../../assets/Pics/Product-3.png';

const ProductType = [
  {
    id: 1,
    img: Product1,
    name: "Cappuccino",
    description: "Enjoy our cappuccino, a rich blend of espresso and frothy milk that energizes and promotes well-being.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Product2,
    name: "Latte",
    description: "Experience our latte, combining velvety steamed milk with robust espresso to boost your energy and mood.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Product3,
    name: "Americano",
    description: "Enjoy our Americano, featuring rich espresso diluted with hot water for a pure, robust flavor.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
    <span id='services'></span>
      <div className='py-10'>
        <div className="container">
          {/* Header Section */}
          <div data-aos="fade-up" className='text-center mb-20'>
            <h1 className='text-5xl font-bold font-cafe text-gray-800'>
               What We Offer
            </h1>
          </div>
          {/* Cards Section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 
            place-items-center'>
            {ProductType.map((data, index) => (
              <div 
                data-aos='fade-up'
                data-aos-delay={data.aosDelay} 
                key={index}
                className='rounded-2xl bg-white hover:bg-primary hover:text-white
                  shadow-xl duration-200 max-w-[300px] group relative'
              >
                {/* Image Section */}
                <div className='flex justify-center items-center h-[200px]'>
                  <img 
                    src={data.img} 
                    alt={data.name} 
                    className='max-w-[200px] max-h-full object-contain transform 
                      group-hover:scale-110 group-hover:rotate-6 duration-300'
                  />
                </div>
                {/* Text Section */}
                <div className='p-4 text-center'>
                  <h1 className='text-xl font-bold'>
                    {data.name}
                  </h1>
                  <p className='text-gray-500 group-hover:text-white duration-300 
                    text-sm line-clamp-2'>
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
