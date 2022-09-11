import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Title from '../../common/title/Title';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title
              subtitle='WELCOME TO ACADEMIA'
              title='Best Online Education'
            />
            <p>
              Heaven yielding make moving all beginning all doesn't dry spirit
              said male there she'd for. Fowl of. Every. Fly. Called forth life
              may fifth under years so isn't. For life which his may divided
              midst fowl there seed night had the. Sea fruit. Them winged moved.
              You'll gathered, whose. Given.
            </p>
            <div className='buttons'>
              <button className='primary_btn btn get_started flexC'>
                Get Started Now <FaLongArrowAltRight className='icon-arrow' />
              </button>
              <button className='primary_btn btn view_course flexC'>
                View Course <FaLongArrowAltRight className='icon-arrow' />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Hero;
