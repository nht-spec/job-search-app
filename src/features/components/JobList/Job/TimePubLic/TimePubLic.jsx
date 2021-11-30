import moment from 'moment';
import React from 'react';
import './style.scss';
function TimePubLic({ job }) {
	return (
		<div className='d-flex align-center c-silver f-size-12 time-control'>
			<span className='material-icons-outlined'>watch_later</span>
			<p>{moment(job.publication_date).fromNow()}</p>
		</div>
	);
}

export default TimePubLic;
