import React from 'react';

const PurchaseCardDesign = ({product, setOrder}) => {
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
                    <div className="card-actions">
                        <label onClick={() => setOrder(product)} disabled={availableQuantity == 0} for="purchase-modal" className="btn btn-primary">Order Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseCardDesign;