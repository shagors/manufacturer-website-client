import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='mt-16'>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
        </div>
    );
};

export default Home;