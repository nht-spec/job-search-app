import moment from 'moment';
import React from 'react';
import './style.scss';
function TimePubLic({ job }) {
	return (
		<div className='d-flex align-center c-silver f-size-12'>
			<span className='material-icons-outlined time-control'>watch_later</span>
			<p>{moment(job.publication_date).fromNow()}</p>
		</div>
	);
}

export default TimePubLic;
