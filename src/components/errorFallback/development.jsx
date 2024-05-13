import React from "react";

const Development = ({error, toggleDetails, isOpen}) => {
	return (
		<div className='flex items-start justify-center min-h-screen mx-20 mt-10 text-xl'>
			<div className='w-screen p-8 space-y-6 rounded-lg shadow-lg'>
				<h1 className='text-2xl font-bold text-red-500'>Failed to compile</h1>
				<p>
					The error: <span className='text-red-400'>{error.message}</span>
				</p>
				<button onClick={toggleDetails} className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300'>
					{isOpen ? "Hide Details" : "Show Details"}
				</button>
				{isOpen && (
					<div className='text-sm overflow-auto p-3 rounded bg-gray-700 text-white min-h-[60vh] text-xl' style={{maxHeight: "200px"}}>
						<pre>{error.stack}</pre>
					</div>
				)}
			</div>
		</div>
	);
};

export default Development;
