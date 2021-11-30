import React from 'react';
import Job from './Job/Job';
function JobList({ joblist }) {
	return (
		<div>
			{joblist &&
				joblist.map((data, idx) => idx < 5 && <Job key={data.id} job={data} />)}
		</div>
	);
}

export default JobList;
