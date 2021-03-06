import React from 'react';

const ReviewOne = ({review}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="avatar flex justify-center items-center mt-5">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{review.name}</h2>
                    <p>{review.review}</p>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewOne;