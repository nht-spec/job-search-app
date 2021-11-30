import React from 'react';
import InputField from '../../../../components/Form-Control/InputField/InputField';
import { useEffect, useState } from 'react';
import './style.scss';

function Search({ searchCompany, handlesubmit, ischangesearch }) {
	const [valueInput, setValueInput] = useState('');
	const [listCompany, setListCompany] = useState([]);
	const [nameCompany, setNameCompany] = useState('');
	const [isFocus, setIsFocus] = useState(false);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		handlesubmit && handlesubmit(nameCompany);
	};

	useEffect(() => {
		let listCompany = {};
		let arrCompany = [];
		searchCompany?.forEach((data) => {
			listCompany[data.company.name]
				? (listCompany[data.company.name] += 1)
				: (listCompany[data.company.name] = 1);
		});
		Object.keys(listCompany).forEach((company) => {
			if (company.indexOf(valueInput) > -1) {
				arrCompany.push(company);
			}
		});
		setListCompany(arrCompany);
	}, [searchCompany, valueInput]);

	useEffect(() => {
		nameCompany && setIsFocus(false);

		if (valueInput && valueInput !== nameCompany) {
			ischangesearch && ischangesearch(true);
			setNameCompany('');
		}

		if (!valueInput) {
			ischangesearch && ischangesearch(true);
		}

		valueInput === nameCompany && ischangesearch && ischangesearch(false);
	}, [nameCompany, valueInput, ischangesearch]);

	useEffect(() => {
		!valueInput && setNameCompany('');
	}, [valueInput]);

	return (
		<div className='search-company-control'>
			<form
				className='form-control br-while d-flex br-radius-4 align-center'
				onSubmit={handleSubmit}
			>
				<span className='material-icons-round c-silver'>work_outline</span>
				<InputField
					isfocus={setIsFocus}
					namecompany={nameCompany}
					placeholder='Title, companies, expertise or benefits'
					valueinput={setValueInput}
				/>
				<button className='search-btn f-family-two cursor br-radius-4'>
					Search
				</button>
			</form>
			{isFocus && (
				<div className='list-company br-while br-radius-4'>
					{listCompany.map((data, idx) => (
						<ul
							onClick={() => setNameCompany(data)}
							className='company-options d-flex align-center cursor bx-shadow br-radius-4'
							key={idx}
						>
							<li className='c-darkslateblue list-style f-size-18'>{data}</li>
						</ul>
					))}
					{listCompany.length === 0 && (
						<p className='c-notfault'>No results found!!</p>
					)}
				</div>
			)}
		</div>
	);
}

export default Search;
