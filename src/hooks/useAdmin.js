import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect( () => {
        const email = user?.email;
        if(email){
            fetch(`https://pacific-ridge-38840.herokuapp.com/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin);
            setAdminLoading(false);
        });
        }
    } , [user]);
    return [admin, setAdmin, adminLoading]
}

export default useAdmin;