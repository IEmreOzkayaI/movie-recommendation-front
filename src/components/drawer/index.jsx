import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Carousel from "../carousel";

const Drawer_ = () => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button className='font-bold w-[200px]'>Movies For Me</Button>
			</DrawerTrigger>
			<DrawerContent className='h-[1000px] p-5'>
				<div className='flex flex-1 items-center justify-center px-2 py-2 rounded-lg'>
					<Carousel />
				</div>
			</DrawerContent>
		</Drawer>
	);
};
export default Drawer_;
