import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, description, price, image, button } = props.service;
    console.log(props.service);
    return (



        <div className='card mx-auto mb-4 bg-warning bg-opacity-25 text-white serviceCards' style={{ width: '18rem' }}>
            <img src={image} class="card-img-top m-0 mb-2 mt-0 mx-auto p-0" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{
                    description
                }</p>

            </div>

            <div class="card-body">
                <strong>Price{price}</strong>
            </div>
        </div>

    );
};

export default Service;