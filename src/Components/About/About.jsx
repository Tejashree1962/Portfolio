import React, { useState } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.jpeg';
import intern from '../../assets/intern.png';
import course from '../../assets/course.png';
import public_service from '../../assets/public-service.png';

const Achievement = ({ imageSrc, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="about-achivement"
            style={{
                transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                transition: '0.5s'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={imageSrc} 
                alt={text} 
                style={{ width: '80px', height: '80px', marginBottom: '10px' }}
            />
            <p style={{ fontSize: '22px', fontWeight: '500' }}>
                {text}
            </p>
        </div>
    );
};

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            "I am a passionate Web Developer with hands-on experience gained through my internship at Infosys. As a student, I have worked on building responsive and user-friendly web applications, continuously enhancing my skills in modern web technologies. I am eager to apply my knowledge and creativity to develop seamless digital experiences."
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: '80%' }} />
                        </div>
                        <div className="about-skill">
                            <p>ReactJs</p>
                            <hr style={{ width: '70%' }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: '80%' }} />
                        </div>
                        <div className="about-skill">
                            <p>NextJs</p>
                            <hr style={{ width: '50%' }} />
                        </div>
                    </div> 
                </div>
            </div>
            
            {/* Achievements Section */}
            <div className="about-achivements">
                <Achievement imageSrc={intern} text="Infosys  Web Developer Internship Completed" />
                <hr />
                <Achievement imageSrc={course} text="Udemy Web Development Course Completed" />
                <hr />
                <Achievement imageSrc={public_service} text="NSS Volunteer" />
            </div>
        </div>
    );
};

export default About;
