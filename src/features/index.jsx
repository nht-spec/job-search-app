import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import JobList from './components/JobList/JobList';
import SearchLocation from './components/SearchLocation/SearchLocation';
import useFilter from './hooks/useFilter';
import useGetJobs from './hooks/useGetJobs';
import './style.scss';
function JobFeatures() {
	const [page, setPage] = useState(1);
	const [companyOfSearch, setCompanyOfSearch] = useState('');
	const [locationOfSearch, setLocationOfSearch] = useState('');
	const [isChangeSearch, setIsChangeSearch] = useState(false);
	const [isChangeSearchLocation, setIsChangeSearchLocation] = useState(false);
	const { filters } = useFilter(page, companyOfSearch, locationOfSearch);
	const { job } = useGetJobs(filters);

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
			<div className='d-flex m-left content-control'>
				<div className='filter-control'>
					<SearchLocation
						searchlocation={job && job.data.results}
						handlesubmit={setLocationOfSearch}
						ischangesearchlocation={setIsChangeSearchLocation}
					/>
				</div>
				<div className='job-pagi-control'>
					<JobList joblist={job && job.data.results} />
					<Pagination
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
