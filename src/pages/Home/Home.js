import React from 'react';
import Footer from '../../components/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import History from './History';
import Progress from './Progress';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='mt-16'>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <History></History>
            <Progress></Progress>
            <Footer></Footer>
        </div>
    );
};

export default Home;