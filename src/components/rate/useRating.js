import { addRating, addRatingStatus } from "@/states/feature/rating/addRating";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import showToast from "../toast";

const useRating = (movieId) => {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);
	const [totalStars, setTotalStars] = useState(5);
	const dispatch = useDispatch();
	const {data, isLoading, error} = useSelector(addRatingStatus);

	useEffect(() => {
		if (data) {
			showToast("Success", "Rating added successfully");
            window.location.reload();
		} else if (error) {
			showToast("Error", error.message);
		}
	}, [data, error]);

	const handleRate = (rate) => {
		setRating(rate);
		dispatch(addRating({movieId, rating:rate}));
	};

	return {
		rating,
		setRating,
		hover,
		setHover,
		totalStars,
		isLoading,
		handleRate,
	};
};

export default useRating;
