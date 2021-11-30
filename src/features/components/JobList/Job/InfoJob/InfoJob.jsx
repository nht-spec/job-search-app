import React from 'react';
import './style.scss';
function InfoJob({ job }) {
	const { name } = job.company;

	return (
		<div className='info-control'>
			<p className='f-size-12 c-darkslateblue name-company'>{name}</p>
			<p className='f-size-18 c-darkslateblue name-job'>{job.name}</p>
			<p className='f-size-12 d-flex align-center c-darkslateblue br-radius-4 full-time-btn'>
				Full time
			</p>
		</div>
	);
}

export default InfoJob;
