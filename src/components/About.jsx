import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className='section-1'>
            <div className='header'>
                <div className='header-nav'>About</div>
                <Link className='header-nav' to="/">Home</Link>
                <Link className='header-nav' to="/contacts">Contacts</Link>
            </div>
        </div>
    );   
}

export default About;
