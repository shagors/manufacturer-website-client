import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const PurchaseModal = ({order, setOrder}) => {
    const {name, availableQuantity} = order;
    const today = new Date().toLocaleDateString();
    const [user] = useAuthState(auth);

    const handleOrder = event => {
        event.preventDefault();
        const date = event.target.name.value;
        console.log(date, name, availableQuantity);
        setOrder(null);
    }

    return (
        <div>
            <input type="checkbox" id="purchase-modal" class="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl text-primary text-center mb-3">Your Order Product: {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={today} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='name'disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" disabled value={availableQuantity} className="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Your Order Quantity" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;