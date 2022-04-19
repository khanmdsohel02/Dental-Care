import React from 'react';
import MailingAddress from "../../Share/MailingAddress/MailingAddress"
import Blog from '../../Share/Blog/Blog';
import useBlog from '../../CustomHook/useBlog';
import Footer from "../../Share/Footer/Footer"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Blogs = () => {
    const [blogs, setBlogs] = useBlog();
    return (
        <div  className = 'main-width' >
            < MailingAddress />
            <div className='recent-post'>
               <p className='title title-bg'>Blogs</p>
                <div className="R-post">
                       {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                        />
                        )
            }
                </div>
            </div>
         
            
                  <div className="d-grid gap-2 mb-3">
  <Button className='btn' variant="primary" size="lg">
  < Link to = "/question" title='QUESTIONS'>QUESTIONS  AND ABOUT ME</Link>
  </Button>
</div>


            < Footer/>
        </div>
    );
};

export default Blogs;