import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import github_icon from '../../assets/github.png';
import linkedin_icon from '../../assets/linkedin.png';

const Contact = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "a9c2d6e3-592a-4e53-ac27-29e4375b7709");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      setFormValues({ name: '', email: '', message: '' });
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt='Mail Icon'/> 
              <p>tejugparab555@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt='Call Icon'/> 
              <p>+9152532866</p>
            </div>
            <div className="contact-detail" style={{ marginBottom: '40px' }}>
              <img src={location_icon} alt='Location Icon'/> 
              <p>THANE, MAHARASHTRA</p>
            </div>
          </div>
          
          <div className="social-links" style={{ gap: '50px' }}>
            <a href="https://github.com/Tejashree1962" target="_blank" rel="noopener noreferrer">
              <img src={github_icon} alt="GitHub" style={{ width: '60px', height: '60px' }} />
            </a>
            <a href="https://www.linkedin.com/in/tejashree-parab-0680202b9/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_icon} alt="LinkedIn" style={{ width: '60px', height: '60px' }} />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="name">Your Name</label>
          <input type='text' id="name" placeholder='Enter your name' name='name' value={formValues.name} onChange={(e) => setFormValues({ ...formValues, name: e.target.value })} required />

          <label htmlFor="email">Your Email</label>
          <input type='email' id="email" placeholder='Enter your email' name='email' value={formValues.email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} required />

          <label htmlFor="message">Your Message</label>
          <textarea placeholder='Enter your message' name='message' rows="8" value={formValues.message} onChange={(e) => setFormValues({ ...formValues, message: e.target.value })} required></textarea>

          <button type="submit" className='contact-submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
