import React, { useEffect, useState } from 'react';
import ReviewOne from './ReviewOne';

const Review = () => {
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch('https://manufacturer-8az5.onrender.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className='lg:mx-20'>
            <div className = 'grid lg:grid-cols-3 gap-4' >
                {
                    reviews?.slice(0,3)?.map(review => <ReviewOne
                    key={review.id}
                    review={review}
                    ></ReviewOne>)
                }
            </div>
        </div>
    );
};

export default Review;