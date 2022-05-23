import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';

const Users = () => {
    const {data: users, isLoading} = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-xl text-purple-500 font-bold'>Admin Set Panel: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Email</th>
                        <th>Make Admin</th>
                        <th>Delete Admin</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => 
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td><button className='btn btn-xs btn-primary'>Make Admin</button></td>
                                    <td><button className='btn btn-xs btn-error'>Delete Admin</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;