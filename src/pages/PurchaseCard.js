import React, { useEffect, useState } from 'react';
import PurchaseCardDesign from './PurchaseCardDesign';

const PurchaseCard = () => {
    const [products, setProducts] = useState([])
    let today = new Date().toLocaleDateString();

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setProducts(data))

        // (async () => {
        //     const res = await fetcher.get('/service');
        //     setParts(res.data);
        // })()
    }, []);

    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-4 my-5'>
                {
                    products.map(product => <PurchaseCardDesign
                    key={product.id}
                    product={product}
                    ></PurchaseCardDesign>)
                }
            </div>
        </div>
    );
};

export default PurchaseCard;