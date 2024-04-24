import React from 'react';

const BlogDetailLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			{children}
			<p>Featured Blogs and latest uploads</p>
		</div>
	);
};

export default BlogDetailLayout;
