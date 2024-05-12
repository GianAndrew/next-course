'use client';

import CircularProgress from './CircularProgress';

const Progress = () => {
	return (
		<div className='container mx-auto min-h-screen'>
			<CircularProgress used={1024} total={1024}></CircularProgress>
		</div>
	);
};

export default Progress;
