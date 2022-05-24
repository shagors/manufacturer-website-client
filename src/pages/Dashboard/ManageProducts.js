import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {

    const { data: products, isLoading, refetch } = useQuery('product', () => fetch('http://localhost:5000/product', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-xl text-purple-500 font-bold'>Manage All Products: {products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProductsRow
                            key={product._id}
                            index={index}
                            product={product}
                            refetch={refetch}
                            ></ManageProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;