import { useEffect, useState } from 'react';
import jobApi from '../../api/jobApi';

export default function useGetJobDetail(id) {
	const [jobDetail, setJobDetail] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		id &&
			(async () => {
				setLoading(true);
				try {
					const result = await jobApi.getJob(id);
					setJobDetail(result);
				} catch (err) {
					throw err;
				}
				setLoading(false);
			})();
	}, [id]);

	return {
		jobDetail,
		loading,
	};
}
