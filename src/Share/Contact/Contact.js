import React from 'react';
import "./contact.css"

const Contact = () => {
    return (
        <section className='contact'>
            <h5>CONTACT ME</h5>
            <h2>Request an Appointment</h2>
            <h4>Fill out the form below and we will contact you during our working hours.</h4>
            <div className="contact-form">
                <form>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="number" name="ph Number" placeholder='Your Ph. Number' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="" rows="7" placeholder='Write Your Problem' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;