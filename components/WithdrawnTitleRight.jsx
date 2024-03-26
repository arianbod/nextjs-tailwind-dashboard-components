import React from 'react';
import Image from 'next/image';
const WithdrawnTitleLeft = ({ title, svg, amount }) => {
	return (
		<div className={`grid grid-cols-1 max-w-20 text-pGreen`}>
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
				<h5 className='font-medium capitalize'>{title}</h5>
			</div>

			{/* amount */}
			<div className='font-extrabold text-xl'>${amount}</div>
		</div>
	);
};

export default WithdrawnTitleLeft;
