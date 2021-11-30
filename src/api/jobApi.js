import axiosApi from './axiosApi';

const jobApi = {
	getAll(params) {
		const url = 'api/public/jobs';
		return axiosApi.get(url, { params });
	},

	getJob(id) {
		const url = `api/public/jobs/${id}`;
		return axiosApi.get(url);
	},
};
export default jobApi;
