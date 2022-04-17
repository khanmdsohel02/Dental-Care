import React from 'react';
import MailingAddress from "../../Share/MailingAddress/MailingAddress"
import "./Home.css"
import HBanner from "../HBanner/HBanner"
import useService from '../../CustomHook/useService';
import SService from '../../Share/SService/SService';

const Home = () => {

    const [services, setServices] = useService();
    return (
        <div className='home' >
            <MailingAddress />
            <HBanner />
            <div className='bg-service'>
               <p className='title'>Service</p>
                <div className="service">
                       {
                    services.slice(0, 3).map(service => <SService
                        key={service.id}
                        service = { service }
                    />)
            }
                </div>
            </div>
        </div>
    );
};

export default Home;