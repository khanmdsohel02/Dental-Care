import React from 'react';
import useService from '../../CustomHook/useService';
import SService from '../../Share/SService/SService';
import "./Services.css"
import MailingAddress from "../../Share/MailingAddress/MailingAddress"
import Contact from "../../Share/Contact/Contact"
import Footer from "../../Share/Footer/Footer"

const Services = () => {

      const [services, setServices] = useService();
    return (
        <>
            < MailingAddress/>
              <div>
               <p className='title title-bg'>Dental Service</p>
                <div className="service services">
                       {
                    services.map(service => <SService
                        key={service.id}
                        service = { service }
                    />)
            }
                </div>
            </div>
            <Contact />
            <Footer/>
        </>
          );
};

export default Services;