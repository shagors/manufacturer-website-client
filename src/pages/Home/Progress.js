import React from 'react';
import progress from '../../assets/progress.jpg'

const Progress = () => {
    return (
        <div className='lg:mx-20 my-10 flex bg-slate-400 shadow-xl rounded-2xl'>
            <div className="hero my-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='grid grid-cols-1 gap-4 mx-28'>
                        <p>MotherBoard</p>
                        <progress class="progress progress-success w-72 h-5" value="90" max="100"></progress>
                        <p>ChipSet</p>
                        <progress class="progress progress-success w-72 h-5" value="80" max="100"></progress>
                        <p>Ram</p>
                        <progress class="progress progress-success w-72 h-5" value="95" max="100"></progress>
                        <p>HDD & SSD</p>
                        <progress class="progress progress-success w-72 h-5" value="85" max="100"></progress>
                        <p>Battery</p>
                        <progress class="progress progress-success w-72 h-5" value="90" max="100"></progress>
                    </div>
                    <div className='mx-10'>
                        <h1 className="text-5xl font-bold">Our Factory Performance</h1>
                        <p className="py-6">We assured you our products is best for Computer Service, We always try our Best for good products.</p>
                        <button className="btn btn-primary">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;