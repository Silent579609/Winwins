import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <div className='section-1'>
            <div className='header'>
                <div className='header-nav'>Home</div>
                <NavLink className='header-nav' to="/about">About</NavLink>
                <NavLink className='header-nav' to="/contacts">Contacts</NavLink>
            </div>
        </div>
    );   
}

export default Home;
