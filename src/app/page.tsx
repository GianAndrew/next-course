import Link from 'next/link';

const Page = () => {
	return (
		<div>
			{process.env.NEXT_PUBLIC_TITLE}
			<p className='flex flex-col'>
				<Link href={'/home'}>Home</Link>
				<Link href={'/products'}>Products</Link>
				<Link href={'/comments'}>Comments</Link>
				<Link href={'/blogs'}>Blogs</Link>
				<Link href={'/docs'}>Docs</Link>
				<Link href={'/folder1'}>Folder</Link>
				<Link href={'/select'}>Select</Link>
			</p>
		</div>
	);
};

export default Page;
