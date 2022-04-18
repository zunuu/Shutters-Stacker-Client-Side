import React from 'react';
import './StoryTelling.css'
const StoryTelling = () => {
    return (
        <div className='mt-5 critue-board pt-5'>

            <h2 className='fs-1 text-dark '>Critique Board</h2>

            <p className='w-50 py-3 mx-auto'>Send me your own story with relevent photos & join in the Public <strong className='text-dark'>Critique Board</strong> to evaluate your clicks<hr /></p>



            <div className='d-flex row w-100 py-5 align-items-center justify-content-center'>
                <div className='col-8 w-100 align-items-center justify-content-center row'>
                    <div className='col-xl-6 col-md-12 col-sm-12 criteria monochrome d-flex align-items-center justify-content-center'>
                        <h2>Monochrome </h2>
                    </div>
                    <div className='col-xl-6 col-md-12 col-sm-12 criteria nature d-flex align-items-center justify-content-center'>
                        <h2>Nature</h2>
                    </div>
                </div>
                <div className='col-8  w-100 align-items-center justify-content-center row '>
                    <div className='col-xl-6 col-md-12 col-sm-12 criteria pet d-flex align-items-center justify-content-center'>
                        <h2>Pets</h2>
                    </div>
                    <div className='col-xl-6 col-md-12 col-sm-12 criteria cuisine d-flex align-items-center justify-content-center'>
                        <h2>Cuisine</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryTelling;