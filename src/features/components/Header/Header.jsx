import React from 'react';
import imageUrl from '../../../constant/image-url';
import Search from './Search/Search';
import './style.scss';

function Header({ searchCompany, handlesubmit, ischangesearch }) {
	return (
		<div className='header-control'>
			<img className='img-header' src={imageUrl.IMG_HEADER} alt='' />
			<div className='search-control'>
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
