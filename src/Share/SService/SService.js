import React from 'react';
import "./SService.css"

const SService = ({service}) => {

    const { img, title, body } = service
    console.log(title);
    return (
        
    
    <div className='s-service'>
           <img src={img} alt="servie"/>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
   
    );
};

export default SService;