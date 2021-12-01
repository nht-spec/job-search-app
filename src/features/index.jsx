import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import Header from './components/Header/Header';
import JobList from './components/JobList/JobList';
import LevelFilter from './components/LevelFilter/LevelFilter';
import SearchLocation from './components/SearchLocation/SearchLocation';
import SkeletonLoading from './components/SkeletonLoading/SkeletonLoading';
import useFilter from './hooks/useFilter';
import useGetJobs from './hooks/useGetJobs';
import './style.scss';

function JobFeatures() {
	const [page, setPage] = useState(1);
	const [companyOfSearch, setCompanyOfSearch] = useState('');
	const [locationOfSearch, setLocationOfSearch] = useState('');
	const [category, setCategory] = useState('');
	const [level, setLevel] = useState('');
	const [isChangeSearch, setIsChangeSearch] = useState(false);
	const [isChangeSearchLocation, setIsChangeSearchLocation] = useState(false);
	const { filters } = useFilter(
		page,
		companyOfSearch,
		locationOfSearch,
		category,
		level
	);
	const { loading, job } = useGetJobs(filters);

	const handleChange = (event, value) => {
		setPage(value);
	};

	useEffect(() => {
		isChangeSearch && setCompanyOfSearch('');
	}, [isChangeSearch]);

	useEffect(() => {
		isChangeSearchLocation && setLocationOfSearch('');
	}, [isChangeSearchLocation]);

	return (
		<>
			<Header
				searchCompany={job && job.data.results}
				handlesubmit={setCompanyOfSearch}
				ischangesearch={setIsChangeSearch}
			/>
			<div className='d-flex m-left content-control d-flex-dir'>
				<div className='filter-control'>
					<div className='d-flex full-time align-center'>
						<input
							type='checkbox'
							className='ip-check-box'
							defaultChecked={true}
						/>
						<p className='f-size-14 c-darkslateblue'>Full time</p>
					</div>
					<SearchLocation
						searchlocation={job && job.data.results}
						handlesubmit={setLocationOfSearch}
						ischangesearchlocation={setIsChangeSearchLocation}
					/>
					<CategoryFilter category={setCategory} />
					<LevelFilter level={setLevel} />
				</div>
				<div className='job-pagi-control'>
					{job?.data.results.length === 0 && (
						<div className='not-found-result d-flex align-center br-while br-radius-4'>
							<img className='img-not-found' src='./notfound.png' alt='' />
							<p className='not-found-text f-size-24'>
								No available jobs found, please check again!
							</p>
						</div>
					)}
					{loading && <SkeletonLoading />}
					{!loading && <JobList joblist={job && job.data.results} />}
					<Pagination
						className='pagination'
						count={job?.data?.page_count > 99 ? 99 : job?.data?.page_count}
						page={page}
						variant='outlined'
						shape='rounded'
						onChange={handleChange}
					/>
				</div>
			</div>
		</>
	);
}

export default JobFeatures;
