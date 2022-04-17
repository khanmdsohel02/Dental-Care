import React from 'react';
import MailingAddress from "../../Share/MailingAddress/MailingAddress"
import "./Home.css"
import HBanner from "../HBanner/HBanner"
import useService from '../../CustomHook/useService';
import SService from '../../Share/SService/SService';
import ShortAboutMe from '../ShortAboutMe/ShortAboutMe';
import useBlog from "../../CustomHook/useBlog"
import Blog from '../../Share/Blog/Blog';


const Home = () => {

    const [services, setServices] = useService();
    const [blogs, setBlogs] = useBlog();

    return (
        <div className='home' >
            <MailingAddress />
            <HBanner />
            <div className='color-bg'>
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
            <ShortAboutMe />
            <div className='recent-post'>
               <p className='title'>Recent Posts</p>
                <div className="R-post">
                       {
                        blogs.slice(0, 6).map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                        />
                        )
            }
                </div>
            </div>
            
        </div>
    );
};

export default Home;