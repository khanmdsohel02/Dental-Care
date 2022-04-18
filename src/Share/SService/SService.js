import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./SService.css"

const SService = ({service}) => {

    const { img, title, body,price } = service
    console.log(title);
    return (
        
    
        <div className='s-service'>
            <p><strong>Price : </strong>{price} TK</p>
           <img src={img} alt="service"/>
            <h4>{title}</h4>
            <p>{body}</p>
                <Button className='btn' variant="primary" size="lg">
  < Link to = "/appointment" title='APPOINTMENT'> BOOKIG NOW </Link>
  </Button>
        </div>
   
    );
};

export default SService;