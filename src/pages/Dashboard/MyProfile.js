import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault();
        toast('Your profile is Save')
    }


    return (
        <div>
            <h1 className='text-xl text-purple-500 font-bold'>Your Profile</h1>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center shadow-2xl w-96 p-5 rounded-lg'>
                    <input type="text" name='name'disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                    <input type="number" required name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                    <input type="text" required name='address' placeholder='Your address' className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='linkdin' placeholder="Your Linkdin Profile Link" className="input input-bordered w-full max-w-xs" />
                    <input type="text" required name='education' placeholder='Your higher education details' className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Submit' className="btn btn-primary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;