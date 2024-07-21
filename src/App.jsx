import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';



const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
