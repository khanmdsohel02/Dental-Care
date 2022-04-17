import React from 'react';
import Me from "../../images/me/me.png"
import "./ShortAboutMe.css"

const ShortAboutMe = () => {
    return (
        <div className='short-boi'>
            <div className="me-img">
                <img src={Me} alt="Dentist" />
            </div>
            <div className="about-me">
                <p className='wc-title'>WELCOME TO DR ABDULLAH DENTAL CARE</p>
                <h1>We Create Beautiful Smiles</h1>
                <p>Dentalia is a modern dental clinic, specialized in advanced diagnostics and treatment of dental and oral disorders. <br /> We offer comprehensive services from all fields of dentistry. In addition to high-end dental equipment, all services are provided in a comfortable, luxury environment. New patients are welcomed with a complimentary oral health consultation.</p>
            </div>
        </div>
    );
};

export default ShortAboutMe;