import * as React from "react";

import {Card, CardContent} from "@/components/ui/card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Movie from "../movie";
import {DrawerClose} from "../ui/drawer";

const movies = [
	{
		id: 1,
		title: "TOY STORY 44",
		summary:
			"Woody, Buzz and his team are returning with the brand new favorite story in the history of cinema! Knowing that it is a great chance to belong to a child, Woody introduces his new friend, Forky. Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. The adventurous journey turns into an unexpected reunion as Woody’s slight detour leads him to his long-lost friend Bo Peep. Together with Bonnie, they embark on a brand new adventure.",
		image_url: "https://bgfilmcilik.com/media/2020/04/TOY-STORY-4.jpg",
		genre: "animation,family",
		production_year: 2019,
		director: "Josh Cooley",
	},
	{
		id: 2,
		title: "THE LION KING",
		summary:
			"The Lion King is a 2019 American musical drama film directed and produced by Jon Favreau, written by Jeff Nathanson, and produced by Walt Disney Pictures. It is a photorealistic computer-animated remake of Disney's traditionally animated 1994 film of the same name. The film stars the voices of Donald Glover, Seth Rogen, Chiwetel Ejiofor, Alfre Woodard, Billy Eichner, John Kani, John Oliver, and Beyoncé Knowles-Carter, as well as James Earl Jones reprising his role from the original film.",
		image_url: "https://bgfilmcilik.com/media/2022/08/CESUR-İTFAİYECİ-FİNAL-AFİŞ-scaled.jpg",
		genre: "animation,drama",
		production_year: 2019,
		director: "Jon Favreau",
	},
	{
		id: 3,
		title: "PRISONERS OF THE GHOSTLAND",
		summary: "Nicholas Cage a notorious criminal goes after a girl who mysteriously disappears. However, an extraordinary and dangerous adventure awaits him. He will have to fight dark and supernatural powers, and face a bad curse.		",
		image_url: "https://bgfilmcilik.com/media/2020/04/prisoner-ghost.jpg",
		genre: "action,horror",
		production_year: 2019,
		director: "Sion Sono",
	},
	{
		id: 4,
		title: "THE LION KING",
		summary:
			"The Lion King is a 2019 American musical drama film directed and produced by Jon Favreau, written by Jeff Nathanson, and produced by Walt Disney Pictures. It is a photorealistic computer-animated remake of Disney's traditionally animated 1994 film of the same name. The film stars the voices of Donald Glover, Seth Rogen, Chiwetel Ejiofor, Alfre Woodard, Billy Eichner, John Kani, John Oliver, and Beyoncé Knowles-Carter, as well as James Earl Jones reprising his role from the original film.",
		image_url: "https://bgfilmcilik.com/media/2022/08/CESUR-İTFAİYECİ-FİNAL-AFİŞ-scaled.jpg",
		genre: "animation,drama",
		production_year: 2019,
		director: "Jon Favreau",
	},
	{
		id: 5,
		title: "TOY STORY 44",
		summary:
			"Woody, Buzz and his team are returning with the brand new favorite story in the history of cinema! Knowing that it is a great chance to belong to a child, Woody introduces his new friend, Forky. Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. The adventurous journey turns into an unexpected reunion as Woody’s slight detour leads him to his long-lost friend Bo Peep. Together with Bonnie, they embark on a brand new adventure.",
		image_url: "https://bgfilmcilik.com/media/2020/04/TOY-STORY-4.jpg",
		genre: "animation,family",
		production_year: 2019,
		director: "Josh Cooley",
	},
	{
		id: 6,
		title: "PRISONERS OF THE GHOSTLAND",
		summary: "Nicholas Cage a notorious criminal goes after a girl who mysteriously disappears. However, an extraordinary and dangerous adventure awaits him. He will have to fight dark and supernatural powers, and face a bad curse.		",
		image_url:
			"https://occ-0-778-3467.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRy8gQZorXW5TobVmZZ76tYhNGEPzHsdi9bnGx0rLN-uAGw8cRJO6ATu6QEuSCkSkDrymLVikJobv8iEKoHZkkMIcqWsiTbyEZPXrnuvpSuMr6HUr075Rr0PNmMMOg5OIvqfEu-geuMIXeWu1tOxfZte8yroAMr3SbjTD0uPRKxP3N_r9_yjyWQijOhOn6ooqrDuSA5JSuLgy14x5K-7HEYLESzZZ8oicV6Kh146DFTQCo8Fb9-mQT8TzbE97ZmBC3qlBFb64yprwFdk6MipRtisAu-s6_47v67Yk8tAcB7jOwJTdcDAjIcNTlZxU1WL4iwmC6ST1hkVsydBU6XqXX8.jpg?r=03c",
		genre: "action,horror",
		production_year: 2019,
		director: "Sion Sono",
	},
];

const Carousel_ = () => {
	return (
		<Carousel className='w-full max-w-7xl'>
			<CarouselContent className=''>
				{movies?.map((movie, index) => (
					<CarouselItem key={index} className='pl-1 md:basis-1/2 lg:basis-1/4'>
						<div className='p-1'>
							<Card>
								<CardContent className='flex aspect-square items-center justify-center p-6'>
										<Movie image={movie.image_url} key={index} id={movie.id}  isDrawer="true"/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default Carousel_;
