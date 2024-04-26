import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import ProductsItem from '../../components/ProductsItem';
import axios from 'axios';
import { getProducts } from '../../server/actions/get-products';

type Product = {
	id: number;
	name: string;
	price: number;
	stock: number;
};

const Products = async () => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['products'],
		queryFn: getProducts,
	});

	return (
		<div>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<ProductsItem />
			</HydrationBoundary>
		</div>
	);
};

export default Products;
