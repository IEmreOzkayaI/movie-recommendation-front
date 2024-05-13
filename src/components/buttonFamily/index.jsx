import {Button} from "../ui/button";
import {Link} from "react-router-dom";

const ButtonFamily = ({ghost, ghostLink, primary, primaryLink}) => {
	return (
		<div className='flex items-center gap-4'>
			<Button variant='ghost' className='text-lg'>
				{ghostLink && <Link to={ghostLink}>{ghost}</Link>}
				{!ghostLink && {ghost}}
			</Button>
			<Button>
				{primaryLink && (
					<Link to={primaryLink} className='text-white text-lg'>
						{primary}
					</Link>
				)}
				{!primaryLink && {primary}}
			</Button>
		</div>
	);
};

export default ButtonFamily;
