import React from 'react'
import './project.css'
import WorkCardData, { sliderSettings } from './utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Project = () => {
     const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <section className='pro-wrapper' id='projects'>
         <span style={{color: darkMode ? 'white': ''}}>Personal</span>
          <span>Projects</span>
          <span>Click on it to see a magic trick</span>
          
          <Swiper
              {...sliderSettings}
              className='pro-wrapper-slider'
          >
              {
                  WorkCardData.map((item, index) => 
                      <SwiperSlide key={index}>
                          <a
                              href={item.viewUrl}
                              rel='noreferrer'
                              target='_blank'
                          >
                              <img src={item.imgsrc} alt={item.title} />
                          </a>
                      </SwiperSlide>
                  )
              }
         </Swiper>
    </section>
  )
}

export default Project