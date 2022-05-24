import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams();
    return (
        <div>
            <h2 className='text-xl text-purple-500 font-bold'>Please pay for: {id}</h2>
        </div>
    );
};

export default Payment;