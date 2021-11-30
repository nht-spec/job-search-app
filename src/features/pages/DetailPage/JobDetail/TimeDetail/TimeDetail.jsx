import React from 'react';
import moment from 'moment';
import './style.scss';
TimeDetail.propTypes = {};

function TimeDetail({ time }) {
	return (
		<div className='d-flex c-silver f-size-12 time-detail-control f-normal'>
			<span className='material-icons-outlined time-control'>schedule</span>
			<p>{moment(time).fromNow()} </p>
		</div>
	);
}

export default TimeDetail;
