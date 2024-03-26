import React from 'react';
import Image from 'next/image';
const WithdrawnTitleLeft = ({ title, svg, text }) => {
	return (
		<div className={`grid grid-cols-1 max-w-20 min-w-40`}>
			{/* icon */}
			<div>
				<Image
					alt={title}
					src={svg}
					width={25}
					height={20}
				/>
			</div>
			{/* title */}
			<div>
				<h5 className={`font-bold text-secondary`}>{title}</h5>
			</div>

			{/* amount */}
			<div className='text-pGrey'>{text}</div>
		</div>
	);
};

export default WithdrawnTitleLeft;
