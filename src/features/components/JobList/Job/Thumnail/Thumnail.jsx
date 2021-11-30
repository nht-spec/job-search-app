import React from 'react';
import imageUrl from '../../../../../constant/image-url';
import './style.scss';

function Thumnail({ job }) {
	const { id } = job.company;

	return (
		<div className='thumbnail'>
			<img
				className='image'
				src={`${imageUrl.COMPANY_LOGO}${id}${imageUrl.COMPANY_LINK}`}
				alt=''
			/>
		</div>
	);
}

export default Thumnail;
