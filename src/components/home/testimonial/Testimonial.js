import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonial } from '../../../dummydata';
import Title from '../../common/title/Title';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <>
      <section className='testimonial padding'>
        <div className='container'>
          <Title subtitle='Testimonial' title='Our Successful Students' />
          <div className='content grid2'>
            {testimonial.map((val) => (
              <div key={Math.random()} className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='cover' />
                    <FaQuoteLeft className='test_icon' />
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
