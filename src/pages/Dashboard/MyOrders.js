import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?user=${user.email}`, {
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
                        <th>Our Stock</th>
                        <th>Your Order</th>
                        <th>Total Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => 
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.order}</td>
                                    <td>{order.availableProductQuan} <span className='text-purple-600'>units</span></td>
                                    <td>{order.orderQuantity} <span className='text-red-600'>units</span></td>
                                    <td>$ {order.price}</td>
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