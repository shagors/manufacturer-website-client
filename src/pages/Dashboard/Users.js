import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import UsersTable from './UsersTable';

const Users = () => {
    const {
        data: users,
        isLoading,
        refetch
    } = useQuery('users', () => fetch('https://manufacturer-8az5.onrender.com/user', {
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
                            users?.map((user, index) => <UsersTable
                            key={user._id}
                            index={index}
                            user={user}
                            refetch={refetch}
                            ></UsersTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;