import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import './Home.css'
import StoryTelling from './StoryTelling/StoryTelling';
const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Services></Services>
            <StoryTelling></StoryTelling>
        </div>
    );
};

export default Home;