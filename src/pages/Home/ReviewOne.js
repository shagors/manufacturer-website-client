import React from 'react';

const ReviewOne = ({review}) => {
    const {img, name, description} = review;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="avatar flex justify-center items-center mt-5">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewOne;