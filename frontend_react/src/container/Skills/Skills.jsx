import React, { useState, useEffect, Fragment} from 'react';
import { motion } from 'framer-motion';
import {Tooltip} from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperiences(data);
      });

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data)
      });
  }, []);

  const styles = {  
    maxWidth: '300px',
    backgroundColor: 'var(--white-color)',
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    padding: '1rem',
    color: 'var(--gray-color)',
    textAlign: 'center',
    lineHeight: '1.5',
    // opacity: '1',
    '@media screen and (min-width: 2000px)': {
      fontSize: '1.75rem',
      maxWidth: '500px',
      lineHeight: '2'
    }
  }
  
  return (
    <>
      <h2 className='head-text'>Skills and Experience</h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1]}}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt="" />
              </div>
              <p className='p-text'>{skill.name} </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
          {experiences.map((experience, index) => {
            return (
              <motion.div
                className='app__skills-exp-item'
                key={index}
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.year} </p>                  
                </div>
                <motion.div className='app__skills-exp-works'>
                  {experience.works.map((work, index) => {
                    return (
                      <Fragment key={index}>
                        <motion.div
                          whileInView={{ opacity: [0, 1]}}
                          transition={{ duration: 0.5 }}
                          className='app__skills-exp-work'
                          data-tooltip-id={work.name}
                        >
                          <h4 className='bold-text'>{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>
                        <Tooltip
                          id={work.name}
                          effect="solid"
                          arrowColor="#313bac"
                          opacity="1"
                          // className="skills-tooltip"
                          style={styles}  
                        >
                          {work.desc}
                        </Tooltip>
                      </Fragment>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  )
};

// export default AppWrap(Skills, 'skills');
export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
); 
