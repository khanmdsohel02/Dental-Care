import React from 'react';
import "./AboutMe.css"
import me from "../../images/me/me.png"
import me1 from "../../images/me/me1.png"
import Footer from "../../Share/Footer/Footer"

const AboutMe = () => {
    return (
        <div className='main-width'>
            <div className='container'>
            <div className="me-info">
                <div className="degrees">
                <h5>Dr. Abdullah</h5>
                <h2>Dental Surgeon</h2>
                <p>Professional Degree: BDS from University of Dhaka & PGT ( Shaheed Suhrawardy Medical college ) <br />
Designation: Honourary Medical officer at Shaheed Suhrawardy Medical college <br />
Specialist On: Dental Surgeon <br />
Hospital Name: Shaheed Suhrawardy Medical college <br />
Chamber Name: Dr.Abdulla Dental Care <br />
Visiting Hour: 06:00 Pm to 10:00 pm Except Friday. <br />
Chamber Location: H-616, -06, Baitu Amam Housing, Adabor, Mohammadpur, Dhaka <br />
Phone Number: +88018324155 <br />
Email Address: abdullah.dr@gmail.com</p>
            </div>
            <div className="me">
                <img src={me} alt="me" />
            </div>
            </div>
            <div className="mission">
                <div className="img-me">
                    <img src={me1} alt="dentist"/>
                </div>
                <div className="mission-info">
                    <h3>MY MISSION</h3>
                    <p>My mission is to put smile on every face in my country and having a nice and healthy teeth.</p> <br /><br />
                    < h3 > My APPROACH </h3>
                    <p>The five key principles of dental ethics are patient autonomy, nonmaleficence, beneficence, justice, and veracity. Understanding each of these principles will provide the guidance needed to ensure that patient needs are met within the ethical guidelines of the dental license.</p>
                </div>
            </div>
            </div>
             < Footer/>
        </div>
    );
};

export default AboutMe;