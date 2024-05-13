import { useState } from "react";

export default function Rate() {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);
	const [totalStars, setTotalStars] = useState(5);

	return (
		<div className='flex items-center text-3xl mr-2 border border-dashed p-4 bg-black text-white'>
			<div className='mr-4'>Rate</div>
			{[...Array(totalStars)].map((_, index) => {
				const currentRating = index + 1;

				return (
					<label key={index} className='cursor-pointer'>
						<input
							className='hidden' // Hide the radio button visually
							type='radio'
							name='rating'
							value={currentRating}
							onChange={() => setRating(currentRating)}
						/>
						<span className={` ${currentRating <= (hover || rating) ? "text-white" : "text-gray-400"}`} onMouseEnter={() => setHover(currentRating)} onMouseLeave={() => setHover(null)}>
							&#10026;{" "}
						</span>
					</label>
				);
			})}
		</div>
	);
}
