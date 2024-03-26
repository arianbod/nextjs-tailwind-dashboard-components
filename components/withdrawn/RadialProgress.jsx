import React from 'react';

const RadialProgress = ({ percentage = 0 }) => {
	const radius = 45;
	const strokeWidth = 10;
	const smallCircleRadius = 25; // Radius for the small inner circle
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (percentage / 100) * circumference;

	return (
		<div>
			<svg
				viewBox='0 0 120 120'
				preserveAspectRatio='xMidYMid meet'>
				{/* Background circle */}
				<circle
					cx='60'
					cy='60'
					r={radius}
					fill='none'
					stroke='var(--color-circle-secondary)'
					strokeWidth={strokeWidth}
					strokeLinecap='round'
				/>

				{/* Progress circle */}
				<circle
					cx='60'
					cy='60'
					r={radius}
					fill='none'
					stroke='var(--color-circle-primary)'
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap='round'
					transform='rotate(-90 60 60)'
				/>

				{/* Small inner circle as background for text */}
				<circle
					cx='60'
					cy='60'
					r={smallCircleRadius}
					fill='var(--color-circle-primary)' // Adjusted the fill color as needed
				/>

				{/* Percentage text */}
				<text
					x='60'
					y='62.5'
					fill='var(--color-circle-white)'
					fontSize='10'
					fontWeight='bold'
					textAnchor='middle'>
					{`${percentage}%`}
				</text>
			</svg>
		</div>
	);
};

export default RadialProgress;
