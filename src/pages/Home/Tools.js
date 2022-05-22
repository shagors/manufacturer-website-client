import React, { useEffect, useState } from 'react';
import fetcher from '../../hooks/api';
import Tool from './Tool';

const Tools = () => {
    const [parts, setParts] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setParts(data))

        // (async () => {
        //     const res = await fetcher.get('/service');
        //     setParts(res.data);
        // })()
    } , []);

    return (
        <div className='my-10 lg:px-20'>
            <h1 className='text-4xl text-center text-primary font-bold uppercase'>Our Manufacture Parts</h1>
            <div className='grid lg:grid-cols-3 gap-5 mt-10'>
                {
                    parts?.map(part => <Tool
                    key={part.id}
                    part={part}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;