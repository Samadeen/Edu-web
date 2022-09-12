import React from 'react';
import { FaStar } from 'react-icons/fa';
import { coursesCard } from '../../dummydata';
import Title from '../common/title/Title';

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Title
            subtitle='Our Courses'
            title='Explore our popular online courses'
          />
          <div className='courses__card'>
            <div className='grid2'>
              {coursesCard.slice(0, 6).map((val) => {
                return (
                  <div className='items'>
                    <div className='content flex'>
                      <div className='left'>
                        <div className='img'>
                          <img src={val.cover} alt='cover' />
                        </div>
                      </div>
                      <div className='text'>
                        <h2>{val.coursesName}</h2>
                        <div className='rate'>
                          <FaStar className='icon_star' />
                          <FaStar className='icon_star' />
                          <FaStar className='icon_star' />
                          <FaStar className='icon_star' />
                          <FaStar className='icon_star' />
                          <label htmlFor='rate'>(5.0)</label>
                        </div>
                        <div className='details'>
                          {val.courTeacher.map((details) => (
                            <>
                              <div className='box'>
                                <div className='dimg'>
                                  <img src={details.dcover} alt='cover' />
                                </div>
                                <div className='para'>
                                  <h4>{details.name}</h4>
                                </div>
                              </div>
                              <span>{details.totalTime}</span>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className='price'>
                      <h3>
                        {val.priceAll} / {val.pricePer}
                      </h3>
                    </div>
                    <button className='outline-btn'>Enroll Now!</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
