import Link from 'next/link';
import React from 'react';

const Folder = () => {
	return (
		<div>
			Folder
			<p>
				<Link href='/folder1/folder2'>Folder2</Link>
			</p>
		</div>
	);
};

export default Folder;
