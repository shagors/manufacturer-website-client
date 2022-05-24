import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0fnhKA5GQnus2VzJO9R4QXKvEBIazsNhBj0EzZusUKAtXDjVXLPbsAdNqjSgf1zrbb8VrvbpQvIfTsJhtwixZ600iGxiMEC8')
const Payment = () => {
    const {id} = useParams();
    const url = `https://pacific-ridge-38840.herokuapp.com/order/${id}`;

    const {data: order, isLoading} = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {order?.ordererName}</p>
                    <h2 className="text-3xl text-purple-500">Pay for {order.order}</h2>
                    <p>Your Payable Amount: <span className='text-orange-700 font-bold text-xl'>$ {order.price}</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                        order={order}
                        ></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;