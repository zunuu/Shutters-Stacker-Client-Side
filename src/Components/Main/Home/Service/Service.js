import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { name, description, price, image, button } = props.service;
    console.log(props.service);
    return (



        <div className='card mx-auto mb-4 bg-warning bg-opacity-25 text-white serviceCards shadow-sm' style={{ width: '18rem' }}>
            <img src={image} className="card-img-top m-0 mb-1 pt-0 mt-0 mx-auto p-0" alt="..." />
            <div className="card-body">
                <h5 className="card-title fs-4">{name}</h5>
                <hr />
                <p className="card-text">{
                    description
                }</p>
                <hr />
            </div>

            <div className="card-body ">
                <strong className=''>Price: {price}</strong>
                <div className="d-grid gap-2">
                    <button type="button" className="mx-auto buyNowBtn w-50 btn btn-outline-warning"><Link to='/checkout'>Buy Now</Link></button>

                </div>
            </div>
        </div>

    );
};

export default Service;