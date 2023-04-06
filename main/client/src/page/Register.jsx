import React from 'react';
import { Link } from 'react-router-dom';

const register = () => {
	const googleAuth = () => {
		window.open('http://localhost:8000/api/auth/google/callback', '_self');
	};
	return (
		<div className='min-h-screen bg-[black]  w-full'>
			<div class=' max-w-md   md:ml-96 pt-40'>
				<h1 class='text-5xl font-bold text-[indigo]'>Sign Up with google</h1>
				<div class='flex justify-between mt-12'>
					<button
						className='flex-1 px-2 py-4 text-sm font-semibold text-indigo-900 bg-[white] border rounded-lg border-[indigo] hover:bg-indigo-50'
						onClick={googleAuth}
					>
						<svg
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							class='inline w-5 h-5 text-blue-500 fill-current'
						>
							<title>Google icon</title>={' '}
						</svg>
						<span class='ml-5'>Sign up with Google</span>
					</button>
				</div>
				<div class='mt-8 text-xs font-semibold text-[indigo]'>
					Already have an account?{' '}
					<a href='/login' class='ml-2 text-[red]'>
						Sign in
					</a>
				</div>
			</div>
		</div>
	);
};

export default register;
