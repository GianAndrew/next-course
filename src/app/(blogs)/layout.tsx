'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navLinks = [
	{ name: 'Blogs', href: '/blogs' },
	{ name: 'Comments', href: '/comments' },
];
const BlogsLayout = ({ children }: { children: React.ReactNode }) => {
	const pathanme = usePathname();
	return (
		<div>
			<nav className='container mx-auto flex flex-row justify-between py-2 px-2 bg-slate-100'>
				<h1>Blogs Navigation</h1>
				<div className='flex flex-row gap-2'>
					{navLinks.map((nav) => {
						return (
							<Link key={nav.name} href={nav.href} className={pathanme === nav.href ? 'text-red-500' : ''} replace>
								{nav.name}
							</Link>
						);
					})}
				</div>
			</nav>
			{children}
		</div>
	);
};

export default BlogsLayout;
