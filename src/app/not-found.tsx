import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: '404 Not Found',
};
const NotFound = () => {
	return (
		<div>
			<p>page not found</p>
			<p>could not find requested resource</p>
		</div>
	);
};

export default NotFound;
