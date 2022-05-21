import React from 'react';

const Tool = ({part}) => {
    const {img, name, price, description} = part;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt={name} class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div class="card-actions">
                <button class="btn btn-primary">Order</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;