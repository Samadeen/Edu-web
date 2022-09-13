import React from 'react';
import Back from '../common/back/Back';
import PriceCard from './PriceCard';
import './Price.css';
import Faq from './Faq';

const Price = () => {
  return (
    <>
      <Back title='Choose the Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
        <Faq />
      </section>
    </>
  );
};

export default Price;
