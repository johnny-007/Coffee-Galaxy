import React from 'react';
import Slider from 'react-slick';
import Person1 from '../../assets/Pics/Person1.jpg';
import Person2 from '../../assets/Pics/Person2.jpg';
import Person3 from '../../assets/Pics/Person3.jpg';
import Person4 from '../../assets/Pics/Person4.jpg';
import Person5 from '../../assets/Pics/Person5.jpg';


const TestimonialsData = [
    {
        id: 1,
        name: "Howard",
        text: "The best latte I've ever had! Smooth, flavorful, and always made with care. Highly recommend Coffee Galaxy for your coffee fix.",
        img: Person1,
    },
    {
        id: 2,
        name: "Haley",
        text: "Coffee Galaxy never disappoints. Their Americano is bold and invigorating, and the staff is always friendly and welcoming.",
        img: Person2,
    },
    {
        id: 3,
        name: "Henry",
        text: "A gem in the city! The cozy ambiance and delicious espresso drinks make Coffee Galaxy my go-to spot for a caffeine boost.",
        img: Person3,
    },
    {
        id: 4,
        name: "Lexi",
        text: "Absolutely love Coffee Galaxy! The cappuccinos are rich and creamy, and the atmosphere is perfect for relaxing with friends.",
        img: Person4,
    },
    {
        id: 5,
        name: "Huell",
        text: "The perfect place to start your day. The variety of brews and the warm, inviting atmosphere make Coffee Galaxy a favorite of mine.",
        img: Person5,
    },
];

const Testimonials = () => {
 const settings = {
   dots: true,
   arrows: false,
   infinite: true,
   speed: 500,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
   cssEase: "linear",
   pauseOnHover: true,
   pauseOnFocus: true,
   responsive: 
   [
    {
      breakpoint: 10000,
      settings:
       {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
       },
    },
    {
      breakpoint: 1024,
      settings: 
       {
         slidesToShow: 2,
         slidesToScroll: 1,
         initialSlide: 2,
       },
    },
    {
      breakpoint: 640,
      settings: 
       {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
    },
   ]
 };
 return (
      <> 
      <span id='testimonials'></span>
         <div className='py-14 mb-10'>
         <div className="container">
          {/* Header */}
           <div
           data-aos="fade-up" 
           className='text-center mb-20'>
            <h1 className='text-5xl font-bold font-cafe text-gray-800'>
              Testimonials
            </h1>
            </div>
          {/* Testimonials Section */}
           <div data-aos="zoom-in">
           <Slider {...settings}>
             {TestimonialsData.map((data) => {
              return (
               <div className='my-6' key={data.id}>
                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                   bg-primary/10 relative'>
               {/* Image Section */}
                  <div className='flex justify-center mb-4'>
                    <img src={data.img} alt={data.name} className='rounded-full w-20 h-20'/>
                  </div>
               {/* Text Section */}
                 <div className='text-center'>
                   <p className='text-lg text-gray-800'>{data.text}</p>
                   <h3 className='mt-2 text-3xl font-bold font-cafe'>{data.name}</h3>
                 </div>
             </div>
          </div>
        );
      })}
    </Slider>
   </div>
  </div>
 </div>
 </>
 );
};

export default Testimonials;
