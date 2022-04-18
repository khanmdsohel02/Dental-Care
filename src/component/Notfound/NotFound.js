import React from 'react';
import notfound from "../../images/404.jpg"
import "./NotFound.css"


const NotFound = () => {
    return (
           <div className='not-found'>
            <img src={notfound} alt="" />
< p >
                <button>
                    < a className = 'text-decoration-none text-white'href='/home'
                > GO TO HOME PAGE </a>
                </button>
           </p>
        </div>
    );
};

export default NotFound;