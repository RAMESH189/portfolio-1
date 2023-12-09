import React from 'react';
import './skills.css';
import Heart from '../../img/heartemoji.png';
import Glass from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../card/Card';
import Resume from './resume.pdf'
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Skills = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const transition = {
    duration: 1,
    type: "spring",
  };
    
  return (
    <section className='skills-wrapper' id='skills'>
          <div className="skills-left">
              <span style={{color: darkMode?'white' : ''}}>These are</span>
              <span>My skills</span>
              <span>
                  This section is to showcase my skills as a <br /> Software Developer    
              </span>
              <a href={Resume} download><button className='button skills-button'>Download CV</button></a>
              <div className="blur skills-blur1" style={{background: '#ABF1FF94'}}></div>
          </div>
          <div className="skills-right">
              
              <motion.div
                  initial={{ left: "50rem" }}
                  whileInView={{ left: "25rem" }}
                  transition={transition}
                  className="skills-card"
                  style={{left:'27rem', top:'-1rem'}}
              >
                  <Card
                      emoji={Heart}
                      heading='Tools'
                      items='Docker, Git, Kubernetes, OpenShift, MongoDB atlas, postman, Figma, AWS'
                  />
              </motion.div>
              
              <motion.div
                  initial={{ left: "-10rem" }}
                  whileInView={{ left: "5rem" }}
                  transition={transition}
                  className="skills-card"
                  style={{top:'-3rem', left: '4rem'}}
              >
                  <Card
                      emoji={Glass}
                      heading='Tech-Stack'
                      items='React Js, Next Js, CSS, Node, Express, MongoDB, JS/TS, MySQL'
                  />
              </motion.div>
              
              <motion.div
                  initial={{ left: "-5rem" }}
                  whileInView={{ left: "5rem" }}
                  transition={transition}
                  className="skills-card"
                  style={{top:'18rem', left: '10rem'}}
              >
                  <Card
                      emoji={Humble}
                      heading='Soft skills'
                      items='Debugging, Leadership, Problem-solving, Adaptability'
                  />
             </motion.div>
            <div className="blur skills-blur2" style={{background: 'var(--purple)'}}></div>
          </div>
    </section>
  )
}

export default Skills