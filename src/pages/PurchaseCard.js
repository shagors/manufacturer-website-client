import React, { useEffect, useState } from 'react';
import fetcher from '../hooks/api';
import PurchaseCardDesign from './PurchaseCardDesign';
import PurchaseModal from './PurchaseModal';

const PurchaseCard = () => {
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetcher.get('/product');
            setProducts(res.data);
        })()
    }, []);

    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-4 my-5'>
                {
                    products.map(product => <PurchaseCardDesign
                    key={product._id}
                    product={product}
                    setOrder={setOrder}
                    ></PurchaseCardDesign>)
                }
            </div>
            { order && <PurchaseModal order={order} setOrder={setOrder}></PurchaseModal>}
        </div>
    );
};

export default PurchaseCard;