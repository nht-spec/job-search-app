import { LinearProgress } from '@mui/material';
import React from 'react';
import { useRouteMatch } from 'react-router';
import useGetJobDetail from '../../hooks/useGetJobDetail';
import HowToApply from './HowToApply/HowToApply';
import JobDetail from './JobDetail/JobDetail';
import './style.scss';
function DetailPage() {
	const {
		params: { jobId },
	} = useRouteMatch();

	const { loading, jobDetail } = useGetJobDetail(jobId);

	if (loading) {
		return (
			<div className='job-detail-control loading-control'>
				<LinearProgress color='success' />
				<p className='c-darkslateblue f-size-24  loading-text'>Loading...</p>
			</div>
		);
	}
	return (
		<div className='job-detail-control d-flex d-flex-dir'>
			<HowToApply jobDetail={jobDetail} />

			<div className='info-job'>
				<JobDetail jobDetail={jobDetail} />
			</div>
		</div>
	);
}

export default DetailPage;
