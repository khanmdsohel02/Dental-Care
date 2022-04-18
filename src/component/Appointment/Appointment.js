import React from 'react';
import "./Appointment.css"
import MailingAddress from "../../Share/MailingAddress/MailingAddress"
import Footer from "../../Share/Footer/Footer"

const Appointment = () => {
    return (
        <>
            < MailingAddress />
            <div className="book">
                <h1>BOOKING NOW</h1>
            </div>
         <section className='contact'>
            <h4>Fill out the form below and we will contact you during our working hours.</h4>
            <div className="contact-form">
                <form>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="number" name="ph Number" placeholder='Your Ph. Number' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <input type="date" name="email" required />
                    <input type="time" name="email" required />
                    <textarea name="" rows="7" placeholder='Write Your Problem' required></textarea>
                    <button type='submit' className='btn btn-primary'>SEND REQUEST</button>
                </form>
            </div>
            </section>
            < Footer/>
        </>
    );
};

export default Appointment;