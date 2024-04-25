import { type NextRequest } from 'next/server';
import { products } from './data';
import { cookies, headers } from 'next/headers';

export const GET = async (request: NextRequest) => {
	const { searchParams } = request.nextUrl;

	const requestHeaders = new Headers(request.headers);
	const headerList = headers();

	const price = searchParams.get('price');
	const stock = searchParams.get('stock');

	console.log(requestHeaders.get('Authorization'));
	console.log(headerList.get('Authorization'));

	const filteredProducts = price || stock ? products.filter((product) => product.price === parseInt(price!) && product.stock === parseInt(stock!)) : products;
	return Response.json({ products: filteredProducts });
};

export const POST = async (request: Request) => {
	const body = await request.json();

	cookies().set('access_token', '123ikesubgfiu_iku3h457skjfihuwhjghian-da0934kl', { httpOnly: true, secure: true });

	return Response.json(body);
};
