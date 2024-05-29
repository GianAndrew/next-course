import { NextResponse, NextRequest } from 'next/server';

const countries = [
	{ name: 'Philippines', region: 'Asia' },
	{ name: 'Indonesia', region: 'Asia' },
	{ name: 'Nigeria', region: 'Africa' },
	{ name: 'Afghanistan', region: 'Asia' },
	{ name: 'Albania', region: 'Europe' },
	{ name: 'Algeria', region: 'Africa' },
	{ name: 'Andorra', region: 'Europe' },
	{ name: 'Angola', region: 'Africa' },
	{ name: 'Antigua & Barbuda', region: 'Americas' },
	{ name: 'Argentina', region: 'Americas' },
	{ name: 'Armenia', region: 'Asia' },
	{ name: 'Australia', region: 'Oceania' },
	{ name: 'Austria', region: 'Europe' },
];

export const GET = async (request: NextRequest) => {
	const country: string[] = [];
	const region: string[] = ['Asia', 'Europe'];

	const filteredCountries = countries.filter((c) =>
		country.length === 0 ? region.includes(c.region) : region.length === 0 ? country.includes(c.name) : region.includes(c.region) && country.includes(c.name)
	);

	return NextResponse.json(filteredCountries, { status: 200 });
};
