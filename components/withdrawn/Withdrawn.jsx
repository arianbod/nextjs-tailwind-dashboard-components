'use client';
import React, { useEffect, useState } from 'react';
import {
	CommissionCard,
	WithdrawnTitleLeft,
	WithdrawnTitleRight,
	RadialProgress,
} from '..';
import {
	briefCaseImg,
	blueDollarImg,
	informationImg,
	blinkImg,
	dollarImg,
	increaseImg,
} from '..';
import Image from 'next/image';
const Withdrawn = () => {
	const [showSensitive, setShowSensitive] = useState(false);
	const showSensitiveFn = (amount) => {
		return showSensitive ? amount : '***';
	};
	useEffect(() => {
		// checking with user localStorage for preferences if there is
		const storedShowSensitive =
			localStorage.getItem('showSensitive') === 'true';
		setShowSensitive(storedShowSensitive);
	}, []);
	return (
		<div className='grid grid-cols-1 gap-4 bg-white rounded-3xl overflow-hidden pb-12 relative sm:min-h-screen md:h-auto'>
			{/* top side*/}
			<div className='bg-pLightGreen text-pGreen grid grid-cols-2 px-0 gap-8 py-6 md:py-12 place-items-center'>
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
			</div>
			{/* down side */}
			<div className='px-8 grid grid-cols-1 gap-4'>
				<div>
					<h1 className='font-bold'>Commission</h1>
				</div>
				<div className='grid md:grid-cols-2 gap-x-8 sm:grid-cols-1'>
					<RadialProgress percentage={43} />
					<div className='grid grid-cols-2 gap-2 gap-y-8 place-items-center'>
						<CommissionCard
							title='Potential Commission'
							svg={briefCaseImg}
							amount={showSensitiveFn('$26,347')}
							color='pLightBlue'
							defaultTextColor={true}
						/>
						<CommissionCard
							title='Earned Commission'
							svg={blueDollarImg}
							amount={showSensitiveFn('$12,443')}
							color='pBlue'
						/>
						{/* to make third element start from right  */}
						<div></div>
						<CommissionCard
							title='Refund'
							svg={informationImg}
							amount={showSensitiveFn('-$2,443')}
							color='pRed'
						/>
					</div>
				</div>
			</div>
			{/* absolute position elements */}
			{/* the blink */}
			<div className='absolute top-5 right-5 md:top-10 md:right-10'>
				<Image
					src={blinkImg}
					width={20}
					alt='hide/show sensitive data'
					height={30}
					onClick={() => (
						localStorage.setItem('showSensitive', !showSensitive),
						setShowSensitive(!showSensitive)
					)}
					className='cursor-pointer'
				/>
			</div>
			{/* bottom text */}
			<span className='text-extraSm font-semibold text-pGrey absolute bottom-5 left-5 capitalize'>
				see all details
			</span>
		</div>
	);
};

export default Withdrawn;
