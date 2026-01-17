import Features from '@/components/home/Features';
import FinalCTA from '@/components/home/FinalCTA';
import ForSellers from '@/components/home/ForSellers';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import PopularItems from '@/components/home/PopularItems';
import SecurePlatform from '@/components/home/SecurePlatform';
import React from 'react';

const Home = () => {
  return (
    <div className='md:w-11/12 mx-auto'>
      {/* hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* How it work */}
      <HowItWorks />

      {/* popular items */}
      <PopularItems />

      {/* secure platform */}
      <SecurePlatform />

      {/* for seller */}
      <ForSellers />

      {/* CTA */}
      <FinalCTA />
      
    </div>
  );
};

export default Home;