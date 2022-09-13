import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { team } from '../../dummydata';

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div key={Math.random()} className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='cover' />
            <div className='overlay'>
              <FaFacebookF className='icon' />
              <FaInstagram className='icon' />
              <FaTwitter className='icon' />
              <FaTiktok className='icon' />
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
