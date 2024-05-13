import {set} from "react-hook-form";
import {Link} from "react-router-dom";
import showToast from "../toast";
import {Toaster} from "../ui/toaster";

// eslint-disable-next-line react/display-name, react/prop-types
const Movie = ({children, image, id, isDrawer = false}) => {
	const handleAuth = () => {
		const token = localStorage.getItem("token");
		if (!token) {
			showToast("Error", "You are not authorized to view this page");
		} else {
			window.location.replace(`/movie/${id}`);
		}
	};
	return (
		<div
			to={`/movie/${id}`}
			onClick={() => {
				isDrawer && window.location.replace("");
				handleAuth();
			}}
			className='relative group w-full col-span-12 lg:col-span-3'>
			<div
				className='
				// Base Styles
				cursor-pointer 
				bg-cover bg-no-repeat bg-center 
				rounded-lg shadow-lg 
				grayscale 
				transition-all transform duration-300 ease-in-out 
			
				// Height transitions
				h-[200px] group-hover:h-[500px] lg:h-[800px] lg:group-hover:h-[800px]
			
				// Hover Effects
				group-hover:grayscale-0
				group-hover:shadow-2xl
				group-hover:scale-105
				group-hover:z-50
			'
				style={{
					backgroundImage: `url(${image})`,
				}}>
				{children}
			</div>
			<Toaster />
		</div>
	);
};

export default Movie;
