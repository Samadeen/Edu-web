import React from 'react';
import Title from '../common/title/Title';
import PriceCard from '../pricing/PriceCard';

const HPrice = () => {
  return (
    <>
      <section className='price padding'>
        <Title subtitle='Our Prices' title='Pricing & Packages' />
        <div className='container price grid'>
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default HPrice;
