import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = ({children}) => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-white fixed top-0 lg:px-20 z-50">
                        <label for="my-drawer-2" class="drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <NavLink to='/' className="flex-1 px-2 mx-2">Prime Co.</NavLink>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-x-4">
                                <NavLink className='rounded-lg hover:bg-primary hover:text-white p-3' to='/home'>Home</NavLink>
                                <NavLink className='rounded-lg hover:bg-primary hover:text-white p-3' to='/purchase'>Purchase</NavLink>
                                {user && <NavLink className='rounded-lg hover:bg-primary hover:text-white p-3' to='/Dashboard'>Dashboard</NavLink>}
                                <NavLink className='rounded-lg hover:bg-primary hover:text-white p-3' to='/blogs'>Blogs</NavLink>
                                <NavLink className='rounded-lg hover:bg-primary hover:text-white p-3' to='/portfolio'>Portfolio</NavLink>
                                <div className='flex justify-center items-center'>
                                    <span className='md:px-3 px-1'>{user?.email}</span>
                                    <span className='md:px-3 px-1'>
                                        {
                                            user ? (
                                                <NavLink to='/home' className='btn btn-primary' onClick={() => signOut(auth)}>Logout</NavLink>
                                            )
                                            :
                                            (<NavLink to='/login'>Login</NavLink>)
                                        }
                                    </span>
                                </div>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        <NavLink className='rounded-lg hover:bg-primary hover:text-white p-3' to='/home'>Home</NavLink>
                        <NavLink className='rounded-lg hover:bg-primary hover:text-white p-3' to='/purchase'>Purchase</NavLink>
                        <NavLink className='rounded-lg hover:bg-primary hover:text-white p-3' to='/Dashboard'>Dashboard</NavLink>
                        <NavLink className='rounded-lg hover:bg-primary hover:text-white p-3' to='/blogs'>Blogs</NavLink>
                        <NavLink className='rounded-lg hover:bg-primary hover:text-white p-3' to='/portfolio'>Portfolio</NavLink>
                        <div className='flex justify-center items-center'>
                            <span className='md:px-3 px-1'>{user?.email}</span>
                            <span className='md:px-3 px-1'>
                                {
                                    user ? (
                                        <NavLink to='/home' className='btn btn-primary' onClick={() => signOut(auth)}>Logout</NavLink>
                                    )
                                    :
                                    (<NavLink to='/login'>Login</NavLink>)
                                }
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;