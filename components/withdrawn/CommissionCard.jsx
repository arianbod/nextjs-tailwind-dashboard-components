import React from 'react';
import Image from 'next/image';

const CommissionCard = ({ title, svg, amount, color, defaultTextColor }) => {
	// Function to determine border color class
	const borderColorClass = () => {
		switch (color) {
			case 'pLightBlue':
				return 'bg-pLightBlue'; // Use background color utility for the border div
			case 'pBlue':
				return 'bg-pBlue';
			case 'pRed':
				return 'bg-pRed'; // Adjust based on your color naming
			default:
				return 'bg-gray-800';
		}
	};

	// Function to determine text color class
	const textColorClass = () => {
		switch (color) {
			case 'pLightBlue':
				return 'text-pLightBlue';
			case 'pBlue':
				return 'text-pBlue';
			case 'pRed':
				return 'text-pRed';
			default:
				return '';
		}
	};

	return (
		<div className='grid grid-cols-1 max-w-20 pl-2 relative '>
			{/* left border */}
			<div
				className={`absolute left-0 top-0 bottom-0 w-1 rounded-md ${borderColorClass()}`}></div>

			{/* icon */}
			<div className='relative'>
				<Image
					alt={title}
					src={svg}
					width={24}
					height={24} // Ensure you define both width and height for <Image />
					layout='fixed' // Use fixed layout to specify dimensions
				/>
			</div>

			{/* title */}
			<div>
				<h5 className='text-pGrey text-sm'>{title}</h5>
			</div>

			{/* amount */}
			<div
				className={`font-extrabold text-xl relative ${
					!defaultTextColor ? textColorClass() : 'text-pGrey'
				}`}>
				{amount}
			</div>
		</div>
	);
};

export default CommissionCard;
