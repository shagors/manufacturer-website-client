import React from 'react';
import { toast } from 'react-toastify';

const ManageProductsRow = ({product, index, refetch}) => {
    const {name, img, availableQuantity} = product;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete ?');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    toast('Product Deleted Complete');
                    refetch();
                }
            })
        }
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td><button onClick={() => handleDelete(product._id)} className='btn btn-xs btn-error'>Delete</button></td>
            <td className=''>Update</td>
        </tr>
    );
};

export default ManageProductsRow;