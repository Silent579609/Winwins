import React from 'react';
import {Link} from 'react-router-dom';

const Contacts = () => {
    return (
        <div className='section-1'>
            <div className='header'>
                Contacts +7-892-2345-23-23
                <Link className='header-nav'to="/">Home</Link>
            </div>
        </div>
    );   
}

export default Contacts;
