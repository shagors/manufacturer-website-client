import React, { useEffect, useState } from 'react';
import ReviewOne from './ReviewOne';

const Review = () => {
    const [reviews, setReviews] = useState();
    console.log(reviews);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setReviews(data))

        // (async () => {
        //     const res = await fetcher.get('/service');
        //     setParts(res.data);
        // })()
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