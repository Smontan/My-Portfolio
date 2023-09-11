import React, { useState } from 'react';
import { HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {/* <img src={images.logo} alt="logo" /> */}
        <span>Dev Shin</span>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', "skills", "contact" ].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} style={{ cursor: 'pointer'}}/>
          {toggle && (
            <motion.div
              whileInView={{ opacity: [0.9, 1], x: [300, 0]}}
              transition={{ duration: 0.85, }}
              style={{ opacity: 0}}
            >
              <HiX onClick={() => setToggle(false)} style={{ cursor: 'pointer'}}/>
                <ul>

                  {['home', 'about', 'work', "skills", "contact" ].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  ))}
                </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
};

export default Navbar;