import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div key={index} className="mywork-item">
                        <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                            <img src={work.w_img} alt={work.w_name} />
                        </a>
                        <h3>
                            <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                                {work.w_name}
                            </a>
                        </h3>
                        <p>{work.w_desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyWork;
