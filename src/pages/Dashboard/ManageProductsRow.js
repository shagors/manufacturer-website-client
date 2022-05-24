import React from 'react';

const ManageProductsRow = ({product, index}) => {
    const {name, img, availableQuantity} = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td><button className='btn btn-xs btn-error'>Delete</button></td>
            <td>Blue</td>
        </tr>
    );
};

export default ManageProductsRow;