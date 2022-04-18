import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, description, price, image, button } = props.service;
    console.log(props.service);
    return (



        <div className='card mx-auto mb-4 bg-warning bg-opacity-25 text-white serviceCards shadow-sm' style={{ width: '18rem' }}>
            <img src={image} class="card-img-top m-0 mb-1 pt-0 mt-0 mx-auto p-0" alt="..." />
            <div className="card-body">
                <h5 className="card-title fs-4">{name}</h5>
                <hr />
                <p className="card-text">{
                    description
                }</p>
                <hr />
            </div>

            <div class="card-body">
                <strong className=''>Price: {price}</strong>
            </div>
        </div>

    );
};

export default Service;