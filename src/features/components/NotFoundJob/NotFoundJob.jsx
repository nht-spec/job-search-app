import React from 'react';
import './style.scss';

function NotFoundJob() {
	return (
		<div className='not-found-result d-flex align-center br-while br-radius-4'>
			<img className='img-not-found' src='./notfound.png' alt='' />
			<p className='not-found-text f-size-24'>
				No available jobs found, please check again!
			</p>
		</div>
	);
}

export default NotFoundJob;
