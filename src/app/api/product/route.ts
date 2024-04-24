import { products } from './data';

export const GET = async () => {
	return Response.json({ products });
};

export const POST = async (request: Request) => {
	const body = await request.json();
	return Response.json(body);
};
