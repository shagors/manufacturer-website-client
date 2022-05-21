import React from 'react';
import factory from '../../assets/factory.jpg'

const History = () => {
    return (
        <div className='lg:mx-20 my-10'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={factory} className="rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold text-primary">Factory History</h1>
                    <p className="py-6">Richard Arkwright is the person credited with inventing the prototype of the modern factory. After he patented his water frame in 1769, he established Cromford Mill, in Derbyshire, England, significantly expanding the village of Cromford to accommodate the migrant workers new to the area.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;