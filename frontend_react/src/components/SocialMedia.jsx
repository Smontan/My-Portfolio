import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaEnvelope } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://web.facebook.com/profile.php?id=61550669022239" target='_blank' rel='noreferrer'>
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/sherwin-monta%C3%B1ez-95644b28b" target='_blank' rel='noreferrer'>
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a href="https://www.sherwinmontanez0@gmail.com" target='_blank'>
            <FaEnvelope />
          </a>
        </div>
        <div>
          <a href="https://github.com/Smontan" target='_blank'>
            <BsGithub />
          </a>
        </div>
    </div>
  )
};

export default SocialMedia;