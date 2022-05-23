import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Reviews = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault();
        toast('Your Review is Save')
    }
    return (
        <div>
            <h2 className='text-xl text-purple-500 font-bold'>Your Reviews Hear</h2>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center shadow-2xl w-96 p-5 rounded-lg'>
                    <input type="text" name='name'disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                    <input type="text" required name='pName' placeholder="Products name" className="input input-bordered w-full max-w-xs" />
                    <textarea className="textarea w-full h-24"  required name='review' placeholder="your review"></textarea>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                    <input type="submit" value='Submit' className="btn btn-primary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default Reviews;