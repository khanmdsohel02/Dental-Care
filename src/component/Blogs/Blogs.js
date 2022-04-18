import React from 'react';
import MailingAddress from "../../Share/MailingAddress/MailingAddress"
const Blog = () => {
    return (
        <>
            < MailingAddress />
            <div className='recent-post'>
               <p className='title'>Recent Posts</p>
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
        </>
    );
};

export default Blog;