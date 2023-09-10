import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const validatorErrors = {};

    if(!formData.name.trim()) {
      validatorErrors.name = "Name is required!";
    } else if(formData.name.length < 6 ){
      validatorErrors.name = "Name should be at least 6 character!";
    }

    if(!formData.email.trim()) {
      validatorErrors.email = "Email is required!";
    } else if(/\S+@\S\.\S+/.test(formData.email)) {
      validatorErrors.email = "Email is not valid!";
    }

    if(!formData.message.trim()) {
      validatorErrors.message = "Message is required!";
    } else if(formData.message.length < 6 ){
      validatorErrors.message = "Message should be at least 6 character!";
    }

    setErrors(validatorErrors);

    if(Object.keys(validatorErrors).length === 0) {
      const contact = {
        _type: 'contact',
        name: name,
        email: email,
        message: message,
      }
  
      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        });
    }
  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className='p-text'>sherwinmontanez0@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +63 909 009 4746" className='p-text'>+63 909 009 4746</a>
        </div>
      </div>

      {!isFormSubmitted ?
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input type='text' className='p-text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} autoComplete='off'/>
          </div>
          {errors.name && (
            <p className='error'>{errors.name}</p>
          )}
          <div className="app__flex">
            <input type='email' className='p-text' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} autoComplete='off'/>
          </div>
            {errors.email && (
              <p className='error'>{errors.email}</p>
            )}
          <div>
            <textarea 
              name="message"
              placeholder="Your Message"
              className="p-text"
              value={message}
              onChange={handleChangeInput}
              autoComplete='off'
              />
          </div>
              {errors.message && (
                <p className='error'>{errors.message}</p>
              )}
          <button type='submit' className='p-text'>{loading ? 'Sending' : 'Send Message'} </button>
        </form>
      :
        <div className='thankyou-message'>
          <h2 className="head-text ">Thank you for getting in touch 🤗🥰😍</h2>
        </div>
      }
    </>
  )
};

// export default Footer;
export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);