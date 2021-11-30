import { useEffect, useState } from 'react';

export default function useFilter(page, company, location) {
	const [filters, setFilters] = useState({});
	useEffect(() => {
		page &&
			setFilters((prevFilters) => ({
				...prevFilters,
				page,
			}));
	}, [page]);
	useEffect(() => {
		company &&
			setFilters((prevFilters) => ({
				...prevFilters,
				company,
			}));
		company === '' &&
			setFilters((prevFilters) => {
				const newFilter = { ...prevFilters };
				delete newFilter.company;
				return newFilter;
			});
	}, [company]);

	useEffect(() => {
		location &&
			setFilters((prevFilters) => ({
				...prevFilters,
				location,
			}));
		location === '' &&
			setFilters((prevFilters) => {
				const newFilter = { ...prevFilters };
				delete newFilter.location;
				return newFilter;
			});
	}, [location]);

	return {
		filters,
	};
}
