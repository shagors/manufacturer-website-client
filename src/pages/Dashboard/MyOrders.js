import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://pacific-ridge-38840.herokuapp.com/order?user=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if(res.status === 401 || res.status === 403){
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user])

    return (
        <div>
            <h2 className='text-xl text-purple-500 font-bold'>Your Orders List: {orders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Your Order</th>
                        <th>Total Price</th>
                        <th>Payment</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => 
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{order.order}</td>
                                    <td>{order.orderQuantity} <span className='text-red-600'>units</span></td>
                                    <td>$ {order.price}</td>
                                    <td>
                                        {
                                            (order.price && !order.paid) && 
                                            <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-primary'>pay</button></Link>
                                        }
                                        {
                                            (order.price && order.paid) && 
                                            <span className='text-success'>paid</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;