import React from 'react';
import imageUrl from '../../../../../constant/image-url';
import './style.scss';
function ThumbnailDetail({ thumbnail }) {
	return (
		<div className='thumbnail-detail'>
			<img
				className='image'
				src={`${imageUrl.COMPANY_LOGO}${thumbnail}${imageUrl.COMPANY_LINK}`}
				alt=''
			/>
		</div>
	);
}

export default ThumbnailDetail;
