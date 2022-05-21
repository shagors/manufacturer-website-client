import React from 'react';

const Tool = ({part}) => {
    const {img, name, price, description} = part;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">$ {price}</h2>
                <p>{description}</p>
                <div className="card-actions">
                <button className="btn btn-primary">Order</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;