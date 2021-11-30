import React from 'react';
import './style.scss';

function JobInfo({ jobinfo }) {
	return (
		<div className='d-flex align-center'>
			<p className='f-size-24 c-darkslateblue job-name '>{jobinfo}</p>
			<p className='f-size-12 d-flex align-center c-darkslateblue br-radius-4 full-time-btn'>
				Full time
			</p>
		</div>
	);
}

export default JobInfo;
