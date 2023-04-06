import React from 'react';
import { Link } from 'react-router-dom';
// import process from 'process/browser';

const Login = () => {
	const googleAuth = () => {
		window.open('http://localhost:8000/api/auth/google/callback', '_self');
	};
	return (
		<div className='min-h-screen bg-[black]  w-full'>
			<div class='max-w-md  md:ml-96 pt-40'>
				<h1 class='text-5xl font-bold text-[indigo]'>Login with google</h1>
				<div class='flex justify-between mt-12'>
					<button
						class='md:flex-1   ml-16 md:ml-0 px-2 py-4 text-sm font-semibold text-indigo-900 bg-[white] border rounded-lg border-[indigo] hover:bg-[indigo]'
						onClick={googleAuth}
					>
						<span class='ml-5'>Login with Google</span>
					</button>
				</div>
				{/* <form class=''>
						<div class='flex flex-col mt-12 sm:flex-row'>
							<div class='flex-1'>
								<label for='name-1' class='text-sm font-bold text-indigo-800'>
									Name
								</label>
								<input
									type='text'
									id='name-1'
									class='w-full h-10 px-3 mt-1 text-sm bg-indigo-50 border border-indigo-300 rounded-md ring-indigo-300 ring-opacity-50 focus:outline-none focus:bg-white focus:ring-4 shadow-sm'
								/>
							</div>
							<div class='flex-1 mt-6 sm:mt-0 sm:ml-4'>
								<label
									for='email-signup'
									class='text-sm font-bold text-indigo-800'
								>
									Email
								</label>
								<input
									type='text'
									id='email-signup'
									class='w-full h-10 px-3 mt-1 text-sm bg-indigo-50 border border-indigo-300 rounded-md ring-indigo-300 ring-opacity-50 focus:outline-none focus:bg-white focus:ring-4 shadow-sm'
									autoComplete='username'
								/>
							</div>
						</div>
			
					</form> */}
				<div class='mt-8 text-xs font-semibold text-[indigo]'>
					Don't have an account?{' '}
					<a href='/register' class='ml-2 text-[red]'>
						Register
					</a>
				</div>
				<button class='flex items-center justify-center w-20 h-20 mt-8 bg-red-500 shadow-xl rounded-3xl hover:bg-red-400'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						class='w-8 h-8 text-white stroke-current'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M17 8l4 4m0 0l-4 4m4-4H3'
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Login;
