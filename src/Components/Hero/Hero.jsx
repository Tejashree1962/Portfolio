import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpeg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from '../../assets/RESUME.pdf';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=''/>
        <h1><span>I am Tejashree Parab,<br/></span>Tech Explorer | Web Developer</h1>
        <p>Aspiring web developer, passionate about creating responsive, user-friendly websites and continuously learning modern web technologies.</p>
        <div className="hero-action">
            <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
            </div>
            <div className="hero-resume">
                <a href={Resume} target="_blank" rel="noopener noreferrer">My Resume</a>
            </div>
        </div>
    </div>
  )
}

export default Hero;
