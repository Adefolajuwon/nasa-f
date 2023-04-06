import React, { useState, useEffect } from 'react';
import { getPictureOfTheDay } from '../components/nasa';
import loading from '../assets/index.mjs';
import { Link } from 'react-router-dom';
const Home = () => {
	const [pictureOfTheDay, setPictureOfTheDay] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPictureOfTheDay = async () => {
			const data = await getPictureOfTheDay();
			setPictureOfTheDay(data);
			setTimeout(() => {
				setIsLoading(false);
			}, 1000); // set a 3 second delay
		};
		fetchPictureOfTheDay();
	}, []);

	return (
		<div>
			<div className='min-h-screen bg-[black]  w-full '>
				<div className='flex justify-end'>
					<Link to='/register'>
						<button
							type='button'
							className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[white] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
						>
							Sign up
						</button>
					</Link>
					<Link to='/login'>
						<button
							type='button'
							className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[white] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
						>
							Log in
						</button>
					</Link>
				</div>

				<h1 className='text-[white] font-bold '>
					Here is your picture of the day:
				</h1>
				{isLoading ? (
					<div className='w-2/5  ml-28 md:ml-96 pt-16'>
						<img src={loading} />
					</div>
				) : pictureOfTheDay ? (
					<div className='md:w-2/5    w-4/5    ml-12 md:ml-96 pt-16'>
						<h1>{pictureOfTheDay.title}</h1>
						<img src={pictureOfTheDay.url} alt={pictureOfTheDay.title} />
					</div>
				) : (
					<div className='w-2/5 ml-96 pt-16'>
						<h1>Failed to load the picture of the day</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
