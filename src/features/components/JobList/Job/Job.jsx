import React from 'react';
import InfoJob from './InfoJob/InfoJob';
import Location from './Location/Location';
import Thumnail from './Thumnail/Thumnail';
import TimePubLic from './TimePubLic/TimePubLic';
import { useHistory } from 'react-router';
import './style.scss';
function Job({ job }) {
	const history = useHistory();
	const handleClick = () => {
		history.push(`/job/${job.id}`);
	};
	return (
		<div
			className='d-flex d-flex-dir cursor job-control box-shadow br-radius-4 br-while f-family-two width-100-mb'
			onClick={handleClick}
		>
			<div className='d-flex'>
				<div>
					<Thumnail job={job} />
				</div>
				<InfoJob job={job} />
			</div>
			<div className='d-flex loca-time-control'>
				<Location job={job} />
				<TimePubLic job={job} />
			</div>
		</div>
	);
}

export default Job;
