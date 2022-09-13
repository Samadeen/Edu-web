import React, { useState } from 'react';
import { FaChevronCircleDown, FaChevronRight } from 'react-icons/fa';
import { faq } from '../../dummydata';
import Title from '../common/title/Title';
import './Price.css';

const Faq = () => {
  const [click, setClick] = useState(false);

  const toggleHandler = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <>
      <Title subtitle='FAQS' title='Frequently Ask Question' />
      <section className='faq'>
        <div className='container'>
          {faq.map((val, index) => (
            <div className='box'>
              <button
                className='accordion'
                onClick={() => toggleHandler(index)}
                key={index}
              >
                <h2>{val.title}</h2>
                <span>
                  {click === index ? (
                    <FaChevronCircleDown className='faq_icon' />
                  ) : (
                    <FaChevronRight className='faq_icon' />
                  )}
                </span>
              </button>
              {click === index ? (
                <div className='text'>
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
