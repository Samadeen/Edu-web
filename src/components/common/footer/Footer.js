import {
  FaCalendarAlt,
  FaFacebookF,
  FaInstagram,
  FaMap,
  FaPaperPlane,
  FaPhoneAlt,
  FaTwitter,
  FaUser,
} from 'react-icons/fa';

import { blog } from '../../../dummydata';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className='newsletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <FaPaperPlane className='newsletter_icon' />
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <FaFacebookF className='footer_icon' />
            <FaTwitter className='footer_icon' />
            <FaInstagram className='footer_icon' />
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>T & C</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <FaCalendarAlt className='footer_icon' />
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <FaUser />
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <FaMap className='footer_icon' />
                203 Sapa View, Osapa London, USA
              </li>
              <li>
                <FaPhoneAlt className='footer_icon' />
                +2 392 3929 210
              </li>
              <li>
                <FaPaperPlane className='footer_icon' />
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved. | This template is made by
          GorkhCoder
        </p>
      </div>
    </>
  );
};

export default Footer;
