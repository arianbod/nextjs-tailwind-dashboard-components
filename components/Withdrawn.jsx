'use client';
import React, { useState } from 'react';
import { CommissionCard, WithdrawnTitleLeft, WithdrawnTitleRight } from './';
import briefCase from '@/public/assets/svg/withdrawn/briefcase.svg';
import blueDollar from '@/public/assets/svg/withdrawn/blueDollar.svg';
import information from '@/public/assets/svg/withdrawn/information.svg';
import blinkImg from '@/public/assets/svg/withdrawn/blink.svg';
import dollar from '@/public/assets/svg/withdrawn/dollar.svg';
import increase from '@/public/assets/svg/withdrawn/increase.svg';
import Image from 'next/image';
const Withdrawn = () => {
	const [showSensitive, setShowSensitive] = useState(
		localStorage.getItem('showSensitive') || false
	);
	const showSensitiveFn = (amount) => {
		return showSensitive ? amount : '***';
	};
	return (
		<div className='grid grid-cols-1 gap-4'>
			<div className='bg-pLightGreen text-pGreen flex justify-between align-middle relative p-6 py-12 shadow-md'>
				<div>
					<WithdrawnTitleLeft
						title='Withdrawn'
						svg={dollar}
						amount={showSensitiveFn('22,748')}
						color='primary'
					/>
				</div>
				<div>
					<WithdrawnTitleRight
						title='%10 increase'
						svg={increase}
						text='from last week'
						color='primary'
					/>
				</div>
				<div className='absolute top-10 right-10'>
					<Image
						src={blinkImg}
						width={20}
						height={30}
						onClick={() => setShowSensitive(!showSensitive)}
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
						svg={briefCase}
						amount={showSensitiveFn('2,443')}
						color='primary'
					/>
					<CommissionCard
						title='Earned Commission'
						svg={blueDollar}
						amount={showSensitiveFn('2,443')}
						color='pBlue'
					/>
					<CommissionCard
						title='Refund'
						svg={information}
						amount={showSensitiveFn('2,443')}
						color='pRed'
					/>
				</div>
				<div>
					<CommissionCard
						title='Potential Commission'
						svg={briefCase}
						amount={showSensitiveFn('2,443')}
						color='primary'
					/>
					<CommissionCard
						title='Earned Commission'
						svg={blueDollar}
						amount={showSensitiveFn('2,443')}
						color='pBlue'
					/>
					<CommissionCard
						title='Refund'
						svg={information}
						amount={showSensitiveFn('2,443')}
						color='pRed'
					/>
				</div>
			</div>
		</div>
	);
};

export default Withdrawn;
