import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({part}) => {
    const {img, name, price, description, minimumOrder, availableQuantity} = part;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Product Name: {name}</h2>
                <h2 className="card-title">Unit Price:$ {price}</h2>
                <h2 className="card-title">Minimum Order: {minimumOrder}</h2>
                <h2 className="card-title">Available Quantity: {availableQuantity}</h2>
                <p>{description}</p>
                <div className="card-actions">
                <Link to='/purchase' className="btn btn-primary">Order</Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;