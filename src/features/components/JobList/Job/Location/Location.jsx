import React from 'react';
import './style.scss';
function Location({ job }) {
	return (
		<div className='d-flex align-center c-silver f-size-12 location-control'>
			<span className='material-icons-round'>public</span>
			<p>{job.locations[0]?.name}</p>
		</div>
	);
}

export default Location;
