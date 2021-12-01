import React from 'react';
import JobInfo from './JobInfo/JobInfo';
import ThumbnailDetail from './ThumbnailDetail/ThumbnailDetail';
import TimeDetail from './TimeDetail/TimeDetail';
import parse from 'html-react-parser';
import './style.scss';
function JobDetail({ jobDetail }) {
	let content = '';

	if (jobDetail.data?.contents) {
		content = jobDetail.data.contents;
	}
	return (
		<div className='f-family-two o-flow width-100-mb'>
			<JobInfo jobinfo={jobDetail.data?.name} />
			<TimeDetail time={jobDetail.data?.publication_date} />
			<div className='d-flex company-info'>
				<ThumbnailDetail thumbnail={jobDetail.data?.company.id} />
				<div className='company-info-text d-flex'>
					<p className='f-size-18 company-name-detail c-darkslateblue'>
						{jobDetail.data?.company.name}
					</p>
					<div className='d-flex align-center c-silver f-size-12 f-normal'>
						<span className='material-icons-outlined location-control-detail'>
							public
						</span>
						<p>{jobDetail.data?.locations[0].name}</p>
					</div>
				</div>
			</div>
			<p className='content c-darkslateblue'>{parse(content)}</p>
		</div>
	);
}

export default JobDetail;
