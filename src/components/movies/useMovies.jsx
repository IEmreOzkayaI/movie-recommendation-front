import {getMovie, clearGetMovieInfo} from "@/states/feature/movie/getMovie";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
const useMovies = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovie());
		return () => {
			dispatch(clearGetMovieInfo());
		};
	}, []);

	const next = (pagination) => {
		const payload = {pagination};
		dispatch(getMovie(payload));
	};

	const previous = (pagination) => {
		const payload = {pagination};
		dispatch(getMovie(payload));
	};

	const clearInfo = () => {
		dispatch(clearGetMovieInfo());
	};
	return {clearInfo, next, previous};
};

export default useMovies;
