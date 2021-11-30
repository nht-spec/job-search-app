import React from 'react';
import { useRouteMatch } from 'react-router';
import useGetJobDetail from '../../hooks/useGetJobDetail';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
function DetailPage() {
	let content = '';
	const {
		params: { jobId },
	} = useRouteMatch();

	const { loading, jobDetail } = useGetJobDetail(jobId);

	if (jobDetail.data?.contents) {
		content = jobDetail.data.contents;
	}

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<Link to='/home'>Back to Search</Link>
			{parse(content)}
		</div>
	);
}

export default DetailPage;
