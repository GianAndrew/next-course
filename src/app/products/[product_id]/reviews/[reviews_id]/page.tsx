import React from 'react';

const Review = ({ params }: { params: { product_id: string; reviews_id: string } }) => {
	return (
		<div>
			Review ID: {params.reviews_id} for product ID :{params.product_id}
		</div>
	);
};

export default Review;
