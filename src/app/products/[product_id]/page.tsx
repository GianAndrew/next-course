'use client';
import Link from 'next/link';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ProductItem = ({ params }: { params: { product_id: string } }) => {
	const product = useQuery({
		queryKey: ['product', params.product_id],
		queryFn: async () => {
			try {
				const response = await axios.get(`/api/product/${params.product_id}`);
				return response.data;
			} catch (error) {
				throw new Error(error as string);
			}
		},
	});

	if (product.isLoading && product.isPending) return <div>Loading...</div>;

	if (product.isPaused) {
		return <p>The server is offline</p>;
	}

	return (
		<div>
			ProductItem
			<p>ID: {params.product_id}</p>
			<div>
				<p>NAME: {product.data?.name}</p>
				<p>PRICE: {product.data?.price}</p>
			</div>
			<p>
				<Link href={`/products/${params.product_id}/reviews`}>Reviews</Link>
			</p>
		</div>
	);
};

export default ProductItem;
