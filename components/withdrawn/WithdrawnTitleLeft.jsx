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
					width={24}
				/>
			</div>
			{/* title */}
			<div>
				<h5 className='font-black  text-2xl mb-2 capitalize'>
					{title}
				</h5>
			</div>

			{/* amount */}
			<div className='font-extrabold text-3xl'>${amount}</div>
		</div>
	);
};

export default WithdrawnTitleLeft;
