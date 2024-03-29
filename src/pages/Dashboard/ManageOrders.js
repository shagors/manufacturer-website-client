import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://manufacturer-8az5.onrender.com/order', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if (res.status === 403) {
                toast.error("You can't see data");
            }
            return res.json();
        })
        .then(data => {
            setOrders(data);
        });
    }, [])
    return (
        <div>
            <h2 className='text-xl text-purple-500 font-bold'>Manage All Orders: {orders?.length}</h2>
        </div>
    );
};

export default ManageOrders;