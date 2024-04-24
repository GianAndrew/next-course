import React from 'react';

const DashboardLayout = ({ children, analytics, profits, notifications }: { children: React.ReactNode; analytics: React.ReactNode; profits: React.ReactNode; notifications: React.ReactNode }) => {
	const isLogged = false;
	return (
		<div>
			<div className='flex'>{isLogged ? children : notifications}</div>
		</div>
	);
};

export default DashboardLayout;
