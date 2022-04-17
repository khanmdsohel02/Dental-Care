import React from 'react';
import "./MailingAddress.css"


const MailingAddress = () => {
    return (
        <div className='mailing-address'>
            <div className='location'>
                
                <h5>Dr. Abdulla Dental Care</h5>
                <p > Baitul Aman Housing, House #616</p>
            </div>
            
            <div className='ph-number'>
                <h5>+88018324155</h5>
                < p > Call me today! </p>
            </div>
            
            <div className='email'>
                <h5>abdulla.dr@gmail.com</h5>
                <p>Email me now!</p>
            </div>
            
            <div className='hours'>
                <h5>Opening Hours</h5>
                <p>Mon-Sun :  06:00 PM - 9:00 PM(BD)</p>
            </div>
            
        </div>
    );
};

export default MailingAddress;