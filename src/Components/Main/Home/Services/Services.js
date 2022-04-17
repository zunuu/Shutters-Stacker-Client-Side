import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('servicesData.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        <div className='mt-5 container mx-auto d-flex row '>
            {services.map(service => <Service
                key={service.id}
                service={service}
            ></Service>)
            }
        </div >
    );
};

export default Services;