import React from 'react';
import "./Blog.css"
const Blog = ({blog}) => {
    const { img, date, title, body } = blog;
    console.log(date);

    return (
       <div className='blog'>
            <img src={img} alt="servie" />
            <small>{date }</small>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Blog;