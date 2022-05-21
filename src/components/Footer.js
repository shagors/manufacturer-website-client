import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='mt-5 bg-slate-300'>
            <div className='pt-5'>
                <h1 className='text-center text-xl'>All Right &amp; reservesd By &copy; Shajjad {year}</h1>
            </div>
            <div className='py-3'>
            </div>
        </div>
    );
};

export default Footer;