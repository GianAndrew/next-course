'use client';
import React from 'react';

const ErrorBoundary = ({ error, reset }: { error: Error; reset: () => void }) => {
	return (
		<div>
			{error.message}
			<div>
				<button onClick={reset}>Try Again</button>
			</div>
		</div>
	);
};

export default ErrorBoundary;
