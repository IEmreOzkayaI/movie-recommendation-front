import {useSelector} from "react-redux";
import showToast from "../toast";
import useMovies from "./useMovies";
import Movie from "../movie";
import {getMovieStatus} from "@/states/feature/movie/getMovie";
import Loading from "../loading";
import Pagination from "../pagination";
import Search from "../search";
import React from "react";

const Movies = () => {
	const {clearInfo, next, previous} = useMovies();
	const {data, error, isLoading} = useSelector(getMovieStatus);

	if (error) {
		showToast("Error", error.message);
		clearInfo();
	}

	return (
		<div className='relative'>
			<Search />
			<main className='grid grid-cols-12 grid-rows-none gap-4 p-4 lg:gap-6 lg:p-6 '>
				{isLoading && <Loading />}
				{data?.movies.map((movie, index) => (
					<Movie image={movie.poster_path} key={index} id={movie.id} />
				))}
			</main>
			{data && <Pagination current={data?.current_page} next={next} previous={previous} />}
		</div>
	);
};

export default Movies;
