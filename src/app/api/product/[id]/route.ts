import { products } from '../data';

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
	const { id } = params;
	const product = products.find((p) => p.id === parseInt(id));
	return Response.json(product);
};
export const PUT = async () => {};
export const DELETE = async () => {};
