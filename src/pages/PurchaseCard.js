import React, { useEffect, useState } from 'react';
import PurchaseCardDesign from './PurchaseCardDesign';
import PurchaseModal from './PurchaseModal';

const PurchaseCard = () => {
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState(null);

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
                    setOrder={setOrder}
                    ></PurchaseCardDesign>)
                }
            </div>
            { order && <PurchaseModal order={order}></PurchaseModal>}
        </div>
    );
};

export default PurchaseCard;