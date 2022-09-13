import { FaCalendarAlt, FaComments, FaUser } from 'react-icons/fa';
import { blog } from '../../dummydata';
import './Blog.css';

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div key={Math.random()} className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='cover' />
          </div>
          <div className='text'>
            <div className='admin flexSB'>
              <span>
                <FaUser />
                <label htmlFor='admin'>{val.type}</label>
              </span>
              <span>
                <FaCalendarAlt />
                <label htmlFor='calender'>{val.date}</label>
              </span>
              <span>
                <FaComments />
                <label htmlFor='comment'>{val.comment}</label>
              </span>
            </div>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
