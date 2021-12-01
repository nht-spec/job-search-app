import { useEffect, useState } from 'react';

export default function useFilter(page, company, location, category, level) {
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

	useEffect(() => {
		let sortCategory = [];
		category && category.map((data) => sortCategory.push(data.category));
		category.length !== 0 &&
			setFilters((prevFilters) => ({
				...prevFilters,
				category: [sortCategory],
			}));
		category.length === 0 &&
			setFilters((prevFilters) => {
				const newFilter = { ...prevFilters };
				delete newFilter.category;
				return newFilter;
			});
	}, [category]);

	useEffect(() => {
		let sortLevel = [];
		level && level.map((data) => sortLevel.push(data.level));
		level.length !== 0 &&
			setFilters((prevFilters) => ({
				...prevFilters,
				level: [sortLevel],
			}));
		level.length === 0 &&
			setFilters((prevFilters) => {
				const newFilter = { ...prevFilters };
				delete newFilter.level;
				return newFilter;
			});
	}, [level]);

	return {
		filters,
	};
}
