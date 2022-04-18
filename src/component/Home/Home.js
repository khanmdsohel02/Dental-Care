import React from 'react';
import MailingAddress from "../../Share/MailingAddress/MailingAddress"
import "./Home.css"
import HBanner from "../HBanner/HBanner"
import useService from '../../CustomHook/useService';
import SService from '../../Share/SService/SService';
import ShortAboutMe from '../ShortAboutMe/ShortAboutMe';
import useBlog from "../../CustomHook/useBlog"
import Blog from '../../Share/Blog/Blog';
import useTestimonial from "../../CustomHook/useTestimonial"
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Contact from '../../Share/Contact/Contact';
import Footer from "../../Share/Footer/Footer"


const Home = () => {

    const [services, setServices] = useService();
    const [blogs, setBlogs] = useBlog();
    const [testimonials, setTestimonials] = useTestimonial();

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
            <div className='tm-bg'>
               <p className='title'>What is Client says!</p>
                < Swiper  modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
                    {
                        testimonials.map(({ img, title, user, body }) => {
                            return (
                               < SwiperSlide className = 'testimonial' >
                                               <div className="client-img">
                                                   <img src={img} alt="client" />
                                               </div>
                                             <div className="client-review">
                                                  <h1>{title}</h1>
                                                   <p>{body}</p>
                                                  <p>{ user}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                        )
                    }
                </Swiper>
            </div>

            < Contact />
            <MailingAddress/>
            <Footer/>
        </div>
    );
};

export default Home;