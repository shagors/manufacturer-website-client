import React from 'react';

const ManageProductsRow = ({product, index, refetch, setDeleteProduct }) => {
    const {name, img, availableQuantity} = product;

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
            <td>
                <label onClick={() => setDeleteProduct(product)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                </td>
            <td className=''>Update</td>
        </tr>
    );
};

export default ManageProductsRow;