import React from 'react';
import img from '../../../Images/aboutme.jpg'
const Blogs = () => {
    return (
        <div className='d-flex w-100 bg-light'>
            <div>
                <h2>
                    Assalamu Alaikum, It's Zunayed Hossain
                </h2>
                <p>A photography enthusiast.I like mostly wildlife photography.My objective is to spread the thoughts in lens which elaborate a the defition of perfect story telling.There's lots of story around us some of them got our attention some of them become ignored</p>
            </div>
            <div className='w-100'>
                <img className='aboutme-img' src={img} alt="" />
            </div>
        </div>
    );
};

export default Blogs;