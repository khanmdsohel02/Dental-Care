import React from 'react';
import "./Fees.css"
import MailingAddress from "../../Share/MailingAddress/MailingAddress"
import Footer from "../../Share/Footer/Footer"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Fees = () => {
    return (
        < div className = 'main-width' >
        < MailingAddress/>
          <div className="book text">
                <h2>Plane & Fees</h2>
            </div>
            <div className="fee">
                < h1> The Fee is 500 Taka only </h1>
            </div>
          
         <div className="d-grid gap-2 mb-3">
  <Button className='btn' variant="primary" size="lg">
  < Link to = "/appointment" title='APPOINTMENT'> BOOKIG NOW </Link>
  </Button>
</div>

            <Footer/>
        </div>
    );
};

export default Fees;