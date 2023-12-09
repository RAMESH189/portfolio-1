import React from 'react'
import './experience.css'
import { useContext } from 'react'
import { themeContext } from '../../Context'
const Experience = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

  return (
      <section className='exp-wrapper' id='experience'>
          <div className="acheivments">
              <div className="circle" style={{backgroundImage: darkMode ? 'linear-gradient(to bottom, #87e6fb 0%, #ffc05c 100%)': ''}}>1+</div>
              <span style={{color:darkMode?'white': ''}}>year</span>
              <span>Experience</span>
          </div>
          <div className="acheivments" >
              <div className="circle" style={{backgroundImage: darkMode ? 'linear-gradient(to bottom, #87e6fb 0%, #ffc05c 100%)': ''}}>2</div>
              <span style={{color:darkMode?'white': ''}}>Major</span>
              <span>Projects</span>
          </div>
          <div className="acheivments">
              <div className="circle" style={{backgroundImage: darkMode ? 'linear-gradient(to bottom, #87e6fb 0%, #ffc05c 100%)': ''}}>10+</div>
              <span style={{color:darkMode?'white': ''}}>personal</span>
              <span>projects</span>
          </div>
          <div className="acheivments">
              <div className="circle" style={{backgroundImage: darkMode ? 'linear-gradient(to bottom, #87e6fb 0%, #ffc05c 100%)': ''}}>100+</div>
              <span style={{color:darkMode?'white': ''}}>hour</span>
              <span>Learning</span>
          </div>
    </section>
  )
}

export default Experience