import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function HowToApply({ jobDetail }) {
	return (
		<div className='how-to-apply-btn-back width-100-mb '>
			<div className='d-flex c-dodgerblue align-center btn-back-control'>
				<span className='material-icons-outlined'>arrow_right_alt</span>
				<Link className='c-dodgerblue f-size-14 link-home t-decor ' to='/home'>
					Back to Search
				</Link>
			</div>
			<h2 className='title c-silver f-size-14 title-text'>HOw to Apply</h2>
			<p className='f-size-14 c-darkslateblue'>
				Please email a copy of your resume and online portfolio to
				<a
					className='link-to-job c-dodgerblue t-decor'
					href={jobDetail.data?.refs.landing_page}
				>
					{jobDetail.data?.short_name}
				</a>
			</p>
		</div>
	);
}

export default HowToApply;
