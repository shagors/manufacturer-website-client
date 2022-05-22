import React, { useEffect, useState } from 'react';

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
            <div>
                {
                    products.map(product => <p>{product.name}</p>)
                }
            </div>
        </div>
    );
};

export default PurchaseCard;