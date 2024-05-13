import Rate from "../rate";

const MovieDetail = ({children}) => {
	return <div className='grid grid-cols-2 grid-rows-third-screen'>{children}</div>;
};

MovieDetail.Header = ({image}) => {
	return (
		<div
			className='
            col-span-2
            md:col-span-1
            lg:col-span-1
            row-span-3
            bg-cover bg-no-repeat bg-center
            rounded
            '
			style={{
				backgroundImage: `url(${image})`,
			}}
		/>
	);
};

MovieDetail.Content = ({title, genre, productionYear, imdb, summary}) => {
	return (
		<div
			className='    
        col-span-1
        md:col-span-1
        lg:col-span-1
        row-span-2
        p-4 lg:p-6 border border-dashed mx-2'>
			<h1 className='text-[4rem] font-bold '>{title}</h1>
			<p className='text-2xl my-2 '>
				<span className='opacity-70 font-bold mr-1'>Category:</span>
				{genre}
			</p>
			<p className='text-2xl my-2'>
				<span className='opacity-70 font-bold mr-1'>Production Year:</span>
				{productionYear}
			</p>
			<p className='text-2xl my-2'>
				<span className='opacity-70 font-bold mr-1'>IMDB:</span>
				{imdb.toFixed(1)}
			</p>
			<p className='text-2xl mt-10 font-bold opacity-70 text-justify'>{summary}</p>
		</div>
	);
};

MovieDetail.Similar = () => {
	return (
		<div className='flex mr-2 flex-1 '>
			{[...Array(3)].map((_, index) => {
				return (
					<div
						key={index}
						className=' border border-dashed p-4 w-full
                            bg-cover bg-no-repeat bg-center
                            grayscale
                            hover:scale-105
                            hover:grayscale-0
                            transition-transform
                    
                    '
						style={{
							backgroundImage: `url(${"https://bgfilmcilik.com/media/2020/04/TOY-STORY-4.jpg"})`,
						}}
					/>
				);
			})}
		</div>
	);
};

// eslint-disable-next-line react/display-name, react/prop-types
MovieDetail.Rate = ({id}) => (
	<div
		className='        
    col-span-1
    md:col-span-1
    lg:col-span-1
    row-span-1 ml-2
    flex flex-col
    '>
		<Rate />
		<MovieDetail.Similar />
	</div>
);

export default MovieDetail;
