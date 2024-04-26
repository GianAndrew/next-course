export const products = [
	{ id: 1, name: 'keyboard', price: 1000, stock: 50 },
	{ id: 2, name: 'mouse', price: 500, stock: 100 },
	{ id: 3, name: 'monitor', price: 1000, stock: 10 },
	{ id: 4, name: 'cpu', price: 2500, stock: 5 },
	{ id: 5, name: 'gpu', price: 2500, stock: 15 },
	{ id: 6, name: 'ram', price: 1000, stock: 10 },
];

const sleep = (m: number) => new Promise((r) => setTimeout(r, m));

export const getProducts = async () => {
	try {
		await sleep(1000);
		return products;
	} catch (error) {
		throw new Error(error as string);
	}
};
