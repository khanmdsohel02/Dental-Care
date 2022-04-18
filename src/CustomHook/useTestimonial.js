import React, { useEffect, useState } from 'react';

const useTestimonial = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, []);
    
    return  [testimonials, setTestimonials];
};

export default useTestimonial;