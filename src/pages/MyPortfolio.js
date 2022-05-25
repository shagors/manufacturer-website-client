import React from 'react';
import portfolio from '../assets/portfolio.JPG'
import spotlight from '../assets/spotlight.PNG'
import warehouse from '../assets/warehouse.PNG'
import Convention from '../assets/Convention.PNG'
import Footer from '../components/Footer';

const MyPortfolio = () => {
    return (
        <>
            <div className='lg:mx-20 mb-10'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div class="avatar">
                            <div class="w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={portfolio} alt='portfolio' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">Shajjad Hossan Shagor</h1>
                            <h2 className='my-3 text-purple-500 text-xl'>shajjadshagor@gmail.com</h2>
                            <button className='btn btn-primary'>Contact Me</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl text-purple-500 text-center'>My Education</h1>
                    <p className='text-2xl text-center my-3 text-slate-800'>I completed My BSc in Computer Science and Engineering from SouthEast University</p>
                </div>
                <div>
                    <h1 className='text-4xl text-purple-500 text-center my-4'>List Of Technology That I know</h1>
                    <p className='text-2xl text-center'>
                        JavaScript and ES6, React, MongoDB, ExpressJs, NodeJs, HTML, CSS, Bootstrap, Tailwind, JAVA, Blender, Linux
                    </p>
                </div>
                <div className='mt-5'>
                    <h1 className='text-4xl text-purple-500 text-center my-5'>Some of My works</h1>
                    <div className='grid lg:grid-cols-3 gap-4'>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                                <img src={spotlight} alt='spotlight' class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">This website Make for Brand company advertiser</h2>
                                <div class="card-actions">
                                <button class="btn btn-primary"><a href="https://spot-light-studio.web.app/">Go To Spotlight</a></button>
                                </div>
                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                                <img src={warehouse} alt="warehouse" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">This Website make for warehouse capacity and count</h2>
                                <div class="card-actions">
                                <button class="btn btn-primary"><a href="https://warehouse-management-45071.web.app/">Go To Warehouse</a></button>
                                </div>
                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                                <img src={Convention} alt="Convention" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">This website made for convention center</h2>
                                <div class="card-actions">
                                <button class="btn btn-primary"><a href="https://assignment-3-live.netlify.app/#">Go To Convention</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyPortfolio;