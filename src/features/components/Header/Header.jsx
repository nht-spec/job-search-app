import React from 'react';
import header from './header.png';
import Search from './Search/Search';
import './style.scss';

function Header({ searchCompany, handlesubmit, ischangesearch }) {
	return (
		<div className='header-control width-100-mb'>
			<img className='img-header' src={header} alt='' />
			<div className='search-control width-100-mb'>
				<Search
					searchCompany={searchCompany}
					handlesubmit={handlesubmit}
					ischangesearch={ischangesearch}
				/>
			</div>
		</div>
	);
}

export default Header;
