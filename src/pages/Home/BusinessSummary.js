import React from 'react';
import people from '../../assets/icons/people.jpg'
import world from '../../assets/icons/world.png'
import money from '../../assets/icons/money.png'

const BusinessSummary = () => {
    return (
        <div className='lg:mx-20 my-20 grid lg:grid-cols-4 gap-4 opacity-70'>
            <div className="card w-72 rounded-lg bg-white">
                <figure className="px-10 pt-10">
                    <img src={people} alt="Shoes" className="rounded-xl w-20 h-20" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-sky-600">Happy Users</h2>
                    <h2 className="card-title text-sky-600 text-5xl">15 M+</h2>
                </div>
            </div>
            <div className="card w-72 rounded-lg bg-white">
                <figure className="px-10 pt-10">
                    <img src={world} alt="Shoes" className="rounded-xl w-20 h-20" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-sky-600">Countries</h2>
                    <h2 className="card-title text-sky-600 text-5xl">100 + </h2>
                </div>
            </div>
            <div className="card w-72 rounded-lg bg-white">
                <figure className="px-10 pt-10">
                    <img src={money} alt="Shoes" className="rounded-xl w-20 h-20" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-sky-600">Revenues</h2>
                    <h2 className="card-title text-sky-600 text-5xl">100 M+</h2>
                </div>
            </div>
            <div className="card w-72 rounded-lg bg-white">
                <figure className="px-10 pt-10">
                    <img src={money} alt="Shoes" className="rounded-xl w-20 h-20" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-sky-600">Awards</h2>
                    <h2 className="card-title text-sky-600 text-5xl">10 +</h2>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;