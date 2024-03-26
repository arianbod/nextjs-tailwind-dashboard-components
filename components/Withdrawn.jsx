'use client';
import React, { useEffect, useState } from 'react';
import { CommissionCard, WithdrawnTitleLeft, WithdrawnTitleRight } from './';
import {
	briefCaseImg,
	blueDollarImg,
	informationImg,
	blinkImg,
	dollarImg,
	increaseImg,
} from './';
import Image from 'next/image';
const Withdrawn = () => {
	const [showSensitive, setShowSensitive] = useState(false);
	const showSensitiveFn = (amount) => {
		return showSensitive ? amount : '***';
	};
	useEffect(() => {
		const storedShowSensitive =
			localStorage.getItem('showSensitive') === 'true';
		setShowSensitive(storedShowSensitive);
	}, []);
	return (
		<div className='grid grid-cols-1 gap-4'>
			<div className='bg-pLightGreen text-pGreen flex justify-between align-middle relative p-6 py-12 shadow-md'>
				<div>
					<WithdrawnTitleLeft
						title='Withdrawn'
						svg={dollarImg}
						amount={showSensitiveFn('22,748')}
						color='primary'
					/>
				</div>
				<div>
					<WithdrawnTitleRight
						title='%10 increase'
						svg={increaseImg}
						text='from last week'
						color='primary'
					/>
				</div>
				<div className='absolute top-10 right-10'>
					<Image
						src={blinkImg}
						width={20}
						height={30}
						onClick={() => (
							localStorage.setItem('showSensitive', !showSensitive),
							setShowSensitive(!showSensitive)
						)}
						className='cursor-pointer'
					/>
				</div>
			</div>
			{/* title downside */}
			<div>
				<h1>Commission</h1>
			</div>
			<div className='grid grid-cols-2'>
				<div>
					<CommissionCard
						title='Potential Commission'
						svg={briefCaseImg}
						amount={showSensitiveFn('2,443')}
						color='primary'
					/>
					<CommissionCard
						title='Earned Commission'
						svg={blueDollarImg}
						amount={showSensitiveFn('2,443')}
						color='pBlue'
					/>
					<CommissionCard
						title='Refund'
						svg={informationImg}
						amount={showSensitiveFn('2,443')}
						color='pRed'
					/>
				</div>
				<div>
					<CommissionCard
						title='Potential Commission'
						svg={briefCaseImg}
						amount={showSensitiveFn('2,443')}
						color='primary'
					/>
					<CommissionCard
						title='Earned Commission'
						svg={blueDollarImg}
						amount={showSensitiveFn('2,443')}
						color='pBlue'
					/>
					<CommissionCard
						title='Refund'
						svg={informationImg}
						amount={showSensitiveFn('2,443')}
						color='pRed'
					/>
				</div>
			</div>
		</div>
	);
};

export default Withdrawn;
