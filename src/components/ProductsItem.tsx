'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { getProducts } from '../server/actions/get-products';

type Product = {
	id: number;
	name: string;
	price: number;
	stock: number;
};
const Products = () => {
	const { data, isPaused, isLoading, isPending, isFetching } = useQuery({
		queryKey: ['products'],
		queryFn: getProducts,
	});

	if (isPending || isFetching) return <div>ProductITem Loading...</div>;

	if (isPaused) {
		return <p>The server is offline</p>;
	}

	return (
		<div>
			Products
			<p className='flex flex-col'>
				{data?.map((product: Product) => (
					<Link key={product.id} href={`/products/${product.id}`} scroll={false}>
						{product.name}
					</Link>
				))}
			</p>
		</div>
	);
};

export default Products;
