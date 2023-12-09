import React from 'react'
import './contact.css'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Contact = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const form = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ua40nmf', 'template_7h0g6z4', form.current, 'bOLzQCK35NNwyXcdJ')
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section id='contact' className='contact-wrapper'>
      <div className="contact-left">
        <span style={{color: darkMode? 'white': ''}}>Get In touch</span>
        <span>With Me !!</span>
      </div>
      <div className="contact-right">
        <form ref={form} className='form' onSubmit={handleSubmit}>
          <input
            className='user'
            type='text'
            placeholder='Name'
            name='user_name'
          />
          <input
            className='user'
            type='email'
            placeholder='Email'
            name='user_email'
          />
          <textarea
            placeholder='Message'
            name='message'
          />
          <button
            type='submit'
            className='button 
            contact-button'
          >
            Send
          </button>
          <span>{ done ? 'Thanks for contacting me' : '' }</span>
        </form>
      </div>
    </section>
  )
}

export default Contact