import React from 'react';
import AboutCard from '../about/AboutCard';
import HAbout from './HAbout';
import Hero from './hero/Hero';
import Testimonial from './testimonial/Testimonial';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonial />
    </>
  );
};

export default Home;
