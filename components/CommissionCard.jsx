import React from 'react';
import Image from 'next/image';

const CommissionCard = ({ title, svg, amount, color }) => {
	// Function to determine border color class
	const borderColorClass = () => {
		switch (color) {
			case 'primary':
				return 'border-primary'; // Assumes you have a 'primary' color defined
			case 'pBlue':
				return 'border-pBlue';
			case 'pRed':
				return 'border-pRed'; // Adjust based on your color naming
			default:
				return 'border-gray-800';
		}
	};

	// Function to determine text color class
	const textColorClass = () => {
		switch (color) {
			case 'primary':
				return 'text-primary';
			case 'pBlue':
				return 'text-pBlue';
			case 'pRed':
				return 'text-pRed';
			default:
				return '';
		}
	};

	return (
		<div
			className={`grid grid-cols-1 max-w-20 border-l-4 pl-2 ${borderColorClass()}`}>
			{/* icon */}
			<div>
				<Image
					alt={title}
					src={svg}
					width={30}
					height={20}
				/>
			</div>
			{/* title */}
			<div>
				<h5 className={`text-pGrey font-medium`}>{title}</h5>
			</div>
            
			{/* amount */}
			<div className={`font-bold ${textColorClass()}`}>${amount}</div>
		</div>
	);
};

export default CommissionCard;
