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
                        <img src={work.w_img} alt={work.w_name} />
                        <h3>{work.w_name}</h3>
                        <p>{work.w_desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyWork;
