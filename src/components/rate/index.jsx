import React, { useEffect } from 'react';
import Loading from "../loading";
import useRating from "./useRating";
import { Toaster } from '../ui/toaster';

export default function Rate({ movieId, currentRating }) {
    const { rating, setRating, hover, setHover, totalStars, isLoading, handleRate } = useRating(movieId);

    useEffect(() => {
        if (currentRating) {
            setRating(currentRating);
        }
    }, [currentRating, setRating]);

    if (isLoading) {
        return <Loading />;
    }

    const isDisabled = Boolean(currentRating);

    return (
        <div className='flex items-center text-3xl mr-2 border border-dashed p-4 bg-black text-white'>
            <div className='mr-4'>Rate</div>
            {[...Array(totalStars)].map((_, index) => {
                const currentStar = index + 1;

                return (
                    <label key={index} className='cursor-pointer'>
                        <input
                            className='hidden' // Hide the radio button visually
                            type='radio'
                            name='rating'
                            value={currentStar}
                            onChange={() => !isDisabled && handleRate(currentStar)}
                            disabled={isDisabled}
                        />
                        <span
                            className={` ${currentStar <= (hover || rating) ? "text-white" : "text-gray-400"}`}
                            onMouseEnter={() => !isDisabled && setHover(currentStar)}
                            onMouseLeave={() => !isDisabled && setHover(null)}
                        >
                            &#10026;{" "}
                        </span>
                    </label>
                );
            })}
			{currentRating && <span className='ml-auto text-sm underline'>Already Rated</span>}
			<Toaster />
        </div>
    );
}
