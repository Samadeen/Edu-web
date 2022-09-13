import React from 'react';
import { awrapper } from '../../dummydata';

const AWrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val) => (
            <div key={Math.random()} className='box flex'>
              <div className='img'>
                <img src={val.cover} alt='cover_image' />
              </div>
              <div className='text'>
                <h2>{val.data}</h2>
                <h4>{val.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AWrapper;
