import type { Metadata } from 'next';
import React from 'react';

export const generateMetadata = ({ params }: { params: { blog_id: string } }): Metadata => {
	return {
		title: 'Blog ID: ' + params.blog_id,
	};
};

const Blog = ({ params }: { params: { blog_id: string } }) => {
	if (parseInt(params.blog_id) === 0) {
		throw new Error('Invalid Blog ID');
	}
	return <div>Blog ID: {params.blog_id}</div>;
};

export default Blog;
