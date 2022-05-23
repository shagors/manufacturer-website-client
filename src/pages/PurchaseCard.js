import React, { useEffect, useState } from 'react';
import fetcher from '../hooks/api';
import PurchaseCardDesign from './PurchaseCardDesign';
import PurchaseModal from './PurchaseModal';
import {useQuery,useMutation} from 'react-query'

const PurchaseCard = () => {
    const [order, setOrder] = useState(null);

    const {data: products, refetch} = useQuery('product', () =>  fetch('http://localhost:5000/product').then(res => res.json()))

    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-4 my-5'>
                {
                    products?.map(product => <PurchaseCardDesign
                    key={product._id}
                    product={product}
                    setOrder={setOrder}
                    ></PurchaseCardDesign>)
                }
            </div>
            { order && <PurchaseModal order={order} setOrder={setOrder} refetch={refetch}></PurchaseModal>}
        </div>
    );
};

export default PurchaseCard;