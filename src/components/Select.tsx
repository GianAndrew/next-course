import { useCallback, useEffect, useRef, useState } from 'react';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

export type SelectOption = {
	label: string;
	value: string | number;
};

type MultipleSelectProps = {
	multiple: true;
	value: SelectOption[];
	onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
	multiple?: false;
	value?: SelectOption;
	onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
	options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

const Select = ({ multiple, value, onChange, options }: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [highlightedIndex, setHighlightedIndex] = useState(0);

	const clearOptions = () => {
		multiple ? onChange([]) : onChange(undefined);
	};
	const selectOption = useCallback(
		(option: SelectOption) => {
			if (multiple) {
				if (value.includes(option)) {
					onChange(value.filter((o) => o !== option));
				} else {
					onChange([...value, option]);
				}
			} else {
				if (option !== value) onChange(option);
			}
		},
		[multiple, value, onChange]
	);

	const isOptionSelected = (option: SelectOption) => {
		return multiple ? value.includes(option) : option === value;
	};

	useEffect(() => {
		if (isOpen) setHighlightedIndex(0);
	}, [isOpen]);

	return (
		<div onBlur={() => setIsOpen(false)} onClick={() => setIsOpen((prev) => !prev)} tabIndex={0} className='w-full relative outline-none rounded-md flex items-center gap-5 p-5 border '>
			<span className='flex-1 flex flex-wrap gap-1'>
				{multiple && value.length === 0 ? <span className='text-slate-400'>Select...</span> : ''}
				{multiple &&
					value.map((v) => (
						<button
							key={v.value}
							onClick={(e) => {
								e.stopPropagation();
								selectOption(v);
							}}
							className='border flex flex-row items-center rounded-md cursor-pointer outline-none gap-2 py-2 px-4'
						>
							{v.label}
							<span>&times;</span>
						</button>
					))}
				{multiple ? '' : value ? <span className='text-black'>{value.label}</span> : <span className='text-slate-400'>Select...</span>}
			</span>
			<button
				onClick={(e) => {
					e.stopPropagation();
					clearOptions();
				}}
				className='border outline-none rounded-md bg-slate-100 px-4 py-2 text-slate-600'
			>
				&times;
			</button>
			<hr className='h-full bg-slate-200 w-[1.5px]' />
			<div className='flex justify-center items-center'>
				<CaretDownIcon />
			</div>
			<ul
				className={cn(`py-4 px-2 w-full absolute left-0 top-[calc(100%+0.25rem)] flex flex-col justify-center gap-1 border rounded-md overflow-y-auto max-h-60 z-50`, {
					hidden: !isOpen,
				})}
			>
				{options.map((option, index) => (
					<li
						onClick={(e) => {
							e.stopPropagation();
							selectOption(option);
							setIsOpen(false);
						}}
						onMouseEnter={() => setHighlightedIndex(index)}
						key={option.value}
						className={cn(
							`px-4 py-2 cursor-pointer rounded-md hover:bg-sky-200 ${isOptionSelected(option) ? 'bg-sky-100' : ''} ${Array.isArray(value) && value.length === 0 ? '' : index === highlightedIndex}`
						)}
					>
						{option.label}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Select;
