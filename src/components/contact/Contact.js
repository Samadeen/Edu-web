import React from 'react';
import Back from '../common/back/Back';
import './Contact.css';

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126839.90179867689!2d3.3488896!3d6.553599999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1663095650424!5m2!1sen!2sng';

  return (
    <>
      <Back title='Contact Us' />
      <section className='contact padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map} title='Map'></iframe>
          </div>
          <div className='right row'>
            <h1>Contact Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className='items grid2'>
              <div className='box'>
                <h4>Address:</h4>
                <p>No 198 Joker Suite, Gotham Bus-stop, Gotham City</p>
              </div>
              <div className='box'>
                <h4>Email:</h4>
                <p>samadmomoh@gmail.com</p>
              </div>
              <div className='box'>
                <h4>Phone:</h4>
                <p>+234 123 456 5789</p>
              </div>
            </div>
            <form action=''>
              <div className='flexSB'>
                <input type='text' value='' placeholder='Name' />
                <input type='email' value='' placeholder='Email Address' />
              </div>
              <input type='email' value='' placeholder='Subject' />
              <textarea name='message' value='' cols='30' rows='10'>
                Create a message here..
              </textarea>
              <button className='outline-btn'>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
