import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@mui/material';
import './style.scss';
SkeletonLoading.propTypes = {
	length: PropTypes.number,
};
SkeletonLoading.defaultProps = {
	length: 5,
};

function SkeletonLoading({ length }) {
	return (
		<>
			{Array.from(new Array(length)).map((x, idx) => (
				<div
					className='skeleton-control cursor box-shadow br-radius-4 br-while'
					key={idx}
				>
					<div className='skeleton-list d-flex'>
						<div className='d-flex skeleton-one'>
							<Skeleton
								animation='wave'
								className='br-radius-4'
								variant='rectangular'
								width={120}
								height={90}
							/>
							<div className='skeleton-two'>
								<Skeleton width='30%' animation='wave' />
								<Skeleton width='60%' animation='wave' />
								<Skeleton height='50%' animation='wave' width='20%' />
							</div>
						</div>
						<div className='skeleton-three d-flex align-center'>
							<Skeleton className='one' animation='wave' width='15%' />
							<Skeleton width='15%' animation='wave' />
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export default SkeletonLoading;
