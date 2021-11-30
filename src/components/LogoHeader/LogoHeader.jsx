import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function LogoHeader(props) {
	return (
		<Link className='logo-text-one d-flex' to='/home'>
			Github
			<p className='logo-text-two'>Jobs</p>
		</Link>
	);
}

export default LogoHeader;
