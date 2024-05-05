'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Reveal = ({ children }: { children: React.ReactNode }) => {
	const MainRef = useRef(null);

	const mainView = useInView(MainRef, { once: true });

	const mainControl = useAnimation();
	useEffect(() => {
		if (mainView) {
			mainControl.start('visible');
		}
	}, [mainControl, mainView]);
	return (
		<div>
			<div ref={MainRef} className='min-h-screen w-full bg-red-200'>
				<motion.div variants={{ hidden: { opacity: 0, y: 0 }, visible: { opacity: 1, y: 0 } }} initial='hidden' animate={mainControl} transition={{ duration: 0.5, delay: 0.5 }}>
					{children}
				</motion.div>
			</div>
		</div>
	);
};

export default Reveal;
