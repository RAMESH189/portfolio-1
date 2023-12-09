import React from 'react';
import './card.css';
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Card = ({ emoji, heading, items }) => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  
  return (
    <div className='card'>
          <img src={emoji} alt={heading} />
          <span>{heading}</span>
          <span>{items}</span>
          <button className={`${darkMode ? 'button' : 'c-button'}`}>Learn more</button>
    </div>
  )
}

export default Card