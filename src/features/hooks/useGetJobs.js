import { useEffect, useState } from 'react';
import jobApi from '../../api/jobApi';

export default function useGetJobs(filters) {
	const [loading, setLoading] = useState(false);
	const [job, setJob] = useState([]);

	useEffect(() => {
		Object.keys(filters).length !== 0 &&
			(async () => {
				try {
					setLoading(true);
					const result = await jobApi.getAll(filters);
					setJob(result);
				} catch (err) {
					throw err;
				}
				setLoading(false);
			})();
	}, [filters]);

	if (job.length !== 0) {
		return {
			job,
		};
	}
	return {
		loading,
	};
}
