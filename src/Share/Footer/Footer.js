import React from 'react';
import "./Footer.css"



const Footer = () => {
    return (
        <div>

            <footer className='footer-1'>
                <div className="map">
                 < iframe src = {"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.342055260347!2d90.35430171498174!3d23.77083088457935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09877020211%3A0x659eedef50a532ae!2sBaitul%20Aman%20Housing%20Society!5e0!3m2!1sen!2sbd!4v1650382291107!5m2!1sen!2sbd"}
                 > </iframe>
                    

                </div>
                <div className="detail-hours">
                    <h3> Opening Hours </h3>
                    < p > Sunday < span > 6: 00 PM - 9: 00 PM </span></p >
                    < p > Monday < span > 6: 00 PM - 9: 00 PM </span></p >
                    < p > Tuesday < span > 6: 00 PM - 9: 00 PM </span></p >
                    < p > Wednesday < span > 6: 00 PM - 9: 00 PM </span></p >
                    < p > Thursday < span > 6: 00 PM - 9: 00 PM </span></p >
                    < p > Saturday < span > 6: 00 PM - 9: 00 PM </span></p >
                </div>
            </footer>

            <footer className='footer-2'>
           <p><small>Copyright © 2022 Dr. Abdulla Dental Care</small></p>
            </footer>

        </div>
    );
};

export default Footer;
