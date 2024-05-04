import Link from 'next/link';
import React from 'react';

const Docs = () => {
	return (
		<div className='min-h-screen w-full bg-slate-50'>
			<div className='h-screen flex flex-col'>
				<nav className='flex py-4 px-4 md:px-2 border-b shadow-sm bg-slate-100'>
					<div className='container mx-auto'>
						<Link href={'/'}>Sample Web</Link>
					</div>
				</nav>

				<main className='container mx-auto'>
					<section className='grid grid-cols-1 md:grid-cols-4 gap-2 px-2 mt-4 md:px-0'>
						<div className='min-h-[100px] rounded-lg bg-orange-500 md:col-span-2'></div>
						<div className='min-h-[100px] rounded-lg bg-teal-500'></div>
						<div className='min-h-[100px] rounded-lg bg-fuchsia-500  row-span-2'></div>
						<div className='min-h-[100px] rounded-lg bg-indigo-500'></div>
						<div className='min-h-[100px] rounded-lg bg-purple-500 md:col-span-2'></div>
						<div className='min-h-[100px] rounded-lg bg-pink-500'></div>
						<div className='min-h-[100px] rounded-lg bg-orange-500'></div>
						<div className='min-h-[100px] rounded-lg bg-teal-500 col-span-2'></div>
					</section>

					<section className='flex flex-col md:flex-row w-full gap-2 px-2 md:px-0 mt-8'>
						<div className='flex-1 min-h-[100px] rounded-lg py-2 px-4 bg-orange-500'>hello</div>
						<div className='flex-1 min-h-[100px] rounded-lg py-2 px-4 bg-teal-500'></div>
						<div className='flex-1 min-h-[100px] rounded-lg py-2 px-4 bg-fuchsia-500'></div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Docs;
