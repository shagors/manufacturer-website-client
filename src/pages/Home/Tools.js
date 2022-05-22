import React, { useEffect, useState } from 'react';
import fetcher from '../../hooks/api';
import Tool from './Tool';

const Tools = () => {
    const [parts, setParts] = useState([]);

    useEffect( () => {
        (async () => {
            const res = await fetcher.get('/product');
            setParts(res.data);
        })()
    } , []);

    return (
        <div className='my-10 lg:px-20'>
            <h1 className='text-4xl text-center text-primary font-bold uppercase'>Our Manufacture Parts</h1>
            <div className='grid lg:grid-cols-3 gap-5 mt-10'>
                {
                    parts?.map(part => <Tool
                    key={part._id}
                    part={part}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;