import React from 'react';
import { toast } from 'react-toastify';

const UsersTable = ({user, index, refetch}) => {
    const {email, role} = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make an admin');
            }
            return res.json();
        })
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                toast.success(`Successfully make admin`);
            }
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className='btn btn-xs btn-primary'>Make Admin</button> 
            : 'Already Admin'}</td>
            <td><button className='btn btn-xs btn-error'>Delete Admin</button></td>
        </tr>
    );
};

export default UsersTable;