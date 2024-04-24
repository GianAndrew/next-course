'use client';
import Link from 'next/link';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Product = {
	id: number;
	name: string;
	price: number;
	stock: number;
};

const Products = () => {
	const products = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			try {
				const response = await axios.get('/api/product');
				return response.data.products;
			} catch (error) {
				throw new Error(error as string);
			}
		},
	});

	if (products.isLoading && products.isPending) return <div>Loading...</div>;

	if (products.isPaused) {
		return <p>The server is offline</p>;
	}

	return (
		<div>
			Products
			<p className='flex flex-col'>
				{products.data?.map((product: Product) => (
					<Link key={product.id} href={`/products/${product.id}`} scroll={false}>
						{product.name}
					</Link>
				))}
			</p>
		</div>
	);
};

export default Products;
