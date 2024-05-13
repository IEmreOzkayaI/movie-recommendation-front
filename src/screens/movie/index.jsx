import Loading from "@/components/loading";
import MovieDetail from "@/components/movieDetail";
import showToast from "@/components/toast";
import {getMovieDetail, clearGetMovieDetailInfo, getMovieDetailStatus} from "@/states/feature/movie/getMovieDetail";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import NotFound from "../error";

const Movie = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const {data, error, isLoading} = useSelector(getMovieDetailStatus);

	useEffect(() => {
		dispatch(getMovieDetail(params.id));
		return () => {
			dispatch(clearGetMovieDetailInfo());
		};
	}, []);

	if (error) {
		showToast("Error", error.message);
		return <NotFound />;
	}

	return (
		<main className='p-4 '>
			{isLoading && <Loading />}
			{data && (
				<MovieDetail>
					<MovieDetail.Header image={data.poster_path} />
					<MovieDetail.Content title={data.title} genre={data.categories} productionYear={data.production_year} summary={data.overview} imdb={data.vote_average} />
					<MovieDetail.Rate id={data.id} />
				</MovieDetail>
			)}
		</main>
	);
};

export default Movie;
