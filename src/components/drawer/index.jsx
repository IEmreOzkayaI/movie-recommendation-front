import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Carousel from "../carousel";
import Loading from "../loading";
import showToast from "../toast";
import { Toaster } from "../ui/toaster";

const Drawer_ = () => {
	// const {data, error, isLoading} = useSelector(addPostStatus);

	// if (data) {
	// 	showToast("Success", "Movie has taken successfully");
	// 	clearInfo();
	// 	setTimeout(() => {
	// 		window.location.reload();
	// 	}, 1500);
	// }

	// if (error) {
	// 	showToast("Error", error.message);
	// 	setTimeout(() => {
	// 		window.location.reload();
	// 	}, 3000);
	// }
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button className='font-bold w-[200px]'>Movies For Me</Button>
			</DrawerTrigger>
			<DrawerContent className='h-[1000px] p-5'>
				{/* {isLoading && (
					<div className='z-10'>
						<Loading />
					</div>
				)} */}
				<div className='flex flex-1 items-center justify-center px-2 py-2 rounded-lg'>
					<Carousel />
					<Toaster />
				</div>
			</DrawerContent>
		</Drawer>
	);
};
export default Drawer_;
