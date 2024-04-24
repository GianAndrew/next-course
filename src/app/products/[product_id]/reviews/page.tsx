import Link from 'next/link';
import React from 'react';

const reviews = [
	{ id: 1, title: 'review 1', content: 'content 1' },
	{ id: 2, title: 'review 2', content: 'content 2' },
	{ id: 3, title: 'review 3', content: 'content 3' },
	{ id: 4, title: 'review 4', content: 'content 4' },
];

const Reviews = ({ params }: { params: { product_id: string } }) => {
	return (
		<div>
			Reviews:
			<p className='flex flex-col'>
				{reviews.map((review) => (
					<Link key={review.id} href={`/products/${params.product_id}/reviews/${review.id}`}>
						{review.title}
					</Link>
				))}
			</p>
		</div>
	);
};

export default Reviews;
