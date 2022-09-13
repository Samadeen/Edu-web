import { coursesCard } from '../../dummydata';
import { FaStar } from 'react-icons/fa';

import './Courses.css';

const CoursesCard = () => {
  return (
    <>
      <section className='courses__card'>
        <div className='container grid2'>
          {coursesCard.map((val) => {
            return (
              <div key={Math.random()} className='items'>
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
      </section>
    </>
  );
};

export default CoursesCard;
