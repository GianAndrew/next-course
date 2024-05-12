import React from 'react';

const CircularProgress = ({ used, total }: { used: number; total: number }) => {
	const radius = 100; // Radius of the circle
	const stroke = 15; // Width of the progress bar
	const normalizedRadius = radius - stroke * 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const strokeDashoffset = circumference - (used / total) * circumference;

	return (
		<svg height={radius * 2} width={radius * 2}>
			<circle stroke='#d9edfe' fill='none' cx={radius} cy={radius} r={normalizedRadius} strokeWidth={15} />
			<circle stroke='#3b82f6' fill='none' strokeWidth={stroke} strokeDasharray={circumference + ' ' + circumference} style={{ strokeDashoffset }} r={normalizedRadius} cx={radius} cy={radius} />
			<text x='50%' y='45%' textAnchor='middle' stroke='#777' fontSize={'20px'} strokeWidth='1px' dy='.3em'>
				{`${used} MB`}
			</text>
			<text x='50%' y='55%' textAnchor='middle' stroke='#777' fontSize={'10px'} strokeWidth='1px' dy='.3em'>
				of 1.00 GB
			</text>
		</svg>
	);
};

export default CircularProgress;
