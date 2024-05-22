'use client';
import React, { useState } from 'react';
import Select, { SelectOption } from '@/components/Select';

const options = [
	{ label: 'First', value: 1 },
	{ label: 'Second', value: 2 },
	{ label: 'Third', value: 3 },
	{ label: 'Fourth', value: 4 },
	{ label: 'Fifth', value: 5 },
];
const SelectPage = () => {
	const [value, setValue] = useState<SelectOption>();

	console.log(value);

	return (
		<div className='flex container mx-auto'>
			<Select options={options} value={value} onChange={(opt) => setValue(opt)} />
		</div>
	);
};

export default SelectPage;
