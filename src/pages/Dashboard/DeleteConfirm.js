import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({deleteProduct, refetch, setDeleteProduct}) => {
    const {name, _id} = deleteProduct;

    const handleDelete = id => {
        const url = `https://manufacturer-8az5.onrender.com/product/${id}`;
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
                setDeleteProduct(null);
                refetch();

            }
        })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are You sure ? You want to delete <span className='text-2xl text-red-600'>{name}</span></h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Delete</button>
                    <label for="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirm;