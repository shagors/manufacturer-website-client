import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';

const Dashboard = () => {
    return (
        <div>
            <div className='mt-16 lg:mx20'>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content text-center">
                        <h1 className='text-4xl font-bold text-primary'>Your Dashboard</h1>
                        <Outlet></Outlet>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                        <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>Your Orders</Link></li>
                        <li><Link to='/dashboard/review'>Your Reviews</Link></li>
                        <li><Link to='/dashboard/profile'>Your Profile</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;