import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import ProductItem from '@/components/ProductItem';
import { getProduct } from '@/server/actions/getProduct';

const Product = async ({ params }: { params: { product_id: string } }) => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['products'],
		queryFn: () => getProduct(params),
	});

	return (
		<div>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<ProductItem params={params} />
			</HydrationBoundary>
		</div>
	);
};

export default Product;
