import React from 'react';
import img from '../../../Images/aboutme.jpg'
import './Aboutme.css'
const Aboutme = () => {
    return (
        <div className='d-flex p-5 blogs '>
            <div className='col-xl-6 '>
                <h2 className='greetings'>
                    Assalamu Alaikum, It's Zunayed Hossain
                </h2>
                <p>A photography enthusiast.I like mostly wildlife photography.My objective is to spread the thoughts in lens which elaborate a the defition of perfect story telling.There's lots of story around us some of them got our attention some of them become ignored</p>
            </div>
            <div className='w-100  '>
                <img className='aboutme-img w-50' src={img} alt="" />
            </div>
        </div>
    );
};

export default Aboutme;