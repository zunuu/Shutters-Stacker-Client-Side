import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {

    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('servicesData.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        <div className='mt-5 container  mx-auto d-flex row '>
            <h1 className='py-3 mb-5 services'>My Services <hr className='w-50 mx-auto' /></h1>

            {services.map(service => <Service
                key={service.id}
                service={service}
            ></Service>)
            }
        </div >
    );
};

export default Services;