import React from 'react';

const PurchaseCardDesign = ({product}) => {
    const {img, name, price, minimumOrder, availableQuantity} = product;

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Product Name: {name}</h2>
                    <p className="">Unit Price:$ {price}</p>
                    <p className="">Minimum Order: {minimumOrder}</p>
                    <p className="">Available Quantity: {availableQuantity}</p>
                    <div class="card-actions">
                    <button class="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseCardDesign;