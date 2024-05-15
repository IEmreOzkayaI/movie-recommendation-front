import {Card, CardContent} from "@/components/ui/card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {getRecommendation, getRecommendationStatus} from "@/states/feature/recommendation/getRecommendation";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../loading";
import Movie from "../movie";
import showToast from "../toast";
import {Toaster} from "../ui/toaster";

const Carousel_ = () => {
	const dispatch = useDispatch();
	const {data, error, isLoading} = useSelector(getRecommendationStatus);

	useEffect(() => {
		dispatch(getRecommendation());
	}, []);

	if (data) {
		showToast("Success", "Movie has taken successfully");
	}

	if (error) {
		showToast("Error", error.message);
	}
	return (
		<>
			{isLoading && (
				<div className='z-10'>
					<Loading />
				</div>
			)}
			{!data && error && <div className='z-10 bg-slate-950 font-bold text-white p-5 rounded-lg shadow'>{error.message}</div>}
			{data && (
				<Carousel className='w-full max-w-7xl'>
					<CarouselContent className=''>
						{data?.map((movie, index) => (
							<CarouselItem key={index} className='pl-1 md:basis-1/2 lg:basis-1/4'>
								<div className='p-1'>
									<Card>
										<CardContent className='flex aspect-square items-center justify-center p-6'>
											<Movie image={movie.poster_path} key={index} id={movie.id} isDrawer='true' />
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			)}
			<Toaster />
		</>
	);
};

export default Carousel_;
