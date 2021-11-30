import axios from 'axios';
var qs = require('qs');
const axiosApi = axios.create({
	baseURL: 'https://www.themuse.com/',
	headers: {
		'Content-Type': 'application/json',
	},
	paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});
export default axiosApi;
