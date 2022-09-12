import React from 'react';
import { online } from '../../dummydata';
import Title from '../common/title/Title';

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Title subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} alt='cover_image' />
                  <img
                    src={val.hoverCover}
                    alt='cover_image'
                    className='show'
                  />
                </div>
                <h3>{val.courseName}</h3>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
