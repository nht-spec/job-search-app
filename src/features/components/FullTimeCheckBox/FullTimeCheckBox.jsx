import React from 'react';
import './style.scss';
function FullTimeCheckBox() {
	return (
		<div className='d-flex full-time align-center'>
			<input type='checkbox' className='ip-check-box' defaultChecked={true} />
			<p className='f-size-14 c-darkslateblue'>Full time</p>
		</div>
	);
}

export default FullTimeCheckBox;
