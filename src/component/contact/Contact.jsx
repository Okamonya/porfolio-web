import React from 'react'
import './contact.css'
import {BiPhoneCall} from 'react-icons/bi'

const Contact = () => {
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className="contact__options">
          <article className='contact__option'>
          <BiPhoneCall className='contact__optio-icon'/>
            <h4>Email</h4>
            <h5>oscarkamonya@gmai.com</h5>
            <a href="oscarkamonya@gmail.com">Send A Message</a>
          </article>
          <article className='contact__option'>
          <BiPhoneCall className='contact__optio-icon'/>
            <h4>LinkedIn</h4>
            <h5>http://oscar-kamonya-a2607a124/.com</h5>
            <a href="oscarkamonya@gmail.com">Send A Message</a>
          </article>
          <article className='contact__option'>
            <BiPhoneCall className='contact__optio-icon'/>
            <h4>WhatssApp</h4>
            <h5>oscarkamonya@gmai.com</h5>
            <a href="https://api.whatsapp.com/send?phone+254729039813">Send A Message</a>
          </article>
        </div>
        <form ref=''>
          <input type="text" name='name' placeholder='enter your full name' required/>
          <input type="email" name='email' placeholder='enter your email' required/>
          <textarea name="message" cols="30" rows="10" placeholder='enter your massage' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact