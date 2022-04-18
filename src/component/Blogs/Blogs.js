import React from 'react';
import MailingAddress from "../../Share/MailingAddress/MailingAddress"
import Blog from '../../Share/Blog/Blog';
import useBlog from '../../CustomHook/useBlog';
import Footer from "../../Share/Footer/Footer"

const Blogs = () => {
    const [blogs, setBlogs] = useBlog();
    return (
        <>
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
            < Footer/>
        </>
    );
};

export default Blogs;