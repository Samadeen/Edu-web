import React from 'react';
import Title from '../common/title/Title';
import { homeAbout } from '../../dummydata';
import AWrapper from './AWrapper';

import './About.css';

const AboutCard = () => {
  return (
    <>
      <section className='about__home'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='a woman' />
          </div>
          <div className='right row'>
            <Title
              subtitle='LEARN ANYTHING'
              title='Benefits About Online Education'
            />
            <div className='items'>
              {homeAbout.map((val) => (
                <div key={Math.random()} className='item flexSB'>
                  <div className='img'>
                    <img src={val.cover} alt='cover_image' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
    </>
  );
};

export default AboutCard;
